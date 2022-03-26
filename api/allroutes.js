const path = require("path");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const User = connection.models.User;
const isAuth = require("./authmidlware.js").isAuth;
const searchAnimIndex = require("../lib/searchUtils").searchAnimIndex;
/**
 * -------------- POST ROUTES ----------------
 */

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "login-success",
  })
);

//if loggedin user attempts to register again, send some generic denial message or just redirect to home page or logged in page.check using req.isAuthenticated.

router.post("/register", async (req, res, next) => {
  try {
    const userExists = await User.exists({ username: req.body.uname });
    if (!userExists) {
      const saltHash = genPassword(req.body.pw);

      const salt = saltHash.salt;
      const hash = saltHash.hash;

      const newUser = new User({
        username: req.body.uname,
        hash: hash,
        salt: salt,
        notes: [],
        animelist: [],
      });

      await newUser.save();

      // res.redirect("/login");
      res.status(201).json({ status: "done" });
    }
    console.log("some one tried to register with existing username");
    res
      .status(400)
      .json({ status: "failed", descr: "This username is already registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed", descr: "some error" });
  }
});

/*
    --------- fun POST routes ---------
*/

//supposedly you need to redirect to sth after a post and send 201

router.post("/updatenotelist", isAuth, (req, res, next) => {
  req.user.notes = req.body;
  console.log(req.user.notes);
  req.user
    .save()
    .then(() => {
      res.status(200).json({ status: "done" });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/remAnime", isAuth, (req, res, next) => {
  const remId = req.body.aniId;
  const remIndex = searchAnimIndex(req.user.animelist, remId);
  req.user.animelist.splice(remIndex, 1);
  req.user
    .save()
    .then(() => {
      res.status(200).json({ status: "done" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "something went wrong" });
    });
});

router.post("/addAnime", isAuth, async (req, res, next) => {
  try {
    const newAnime = req.body;
    const aniIndex = searchAnimIndex(req.user.animelist, newAnime.id);

    if (!aniIndex) {
      req.user.animelist.push(newAnime);
      await req.user.save();
      res.status(200).json({ status: "done" });
    }
    res
      .status(400)
      .json({ status: "failed", descr: "Anime already in your list" });
  } catch (error) {
    res.status(500).json({ status: "failed", descr: "server error" });
  }
});

/**
 * -------------- GET ROUTES ----------------
 */

router.get("/user", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true, userName: req.user.username });
  } else {
    res.json({ loggedIn: false, userName: "Guest" });
  }
});

// Visiting this route logs the user out
router.get("/logout", (req, res, next) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.json({ loggedIn: false, userName: "Guest" });
  } else {
    res.status(401).json({ status: "you are not authorized" });
  }
});

router.get("/login-success", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ loggedIn: true, user: req.user.username });
  } else {
    res.status(401).json({ loggedIn: false, descr: "not authorized" });
  }
});

router.get("/login-failure", (req, res, next) => {
  res.status(401).json({ loggedIn: false, descr: "Invalid Credentials" });
});

/*
    --------- fun GET routes ---------
*/

router.get("/getnotelist", isAuth, (req, res, next) => {
  console.log("tried getting notelist");
  res.json({ userNoteList: req.user.notes });
});

router.get("/useranimelist", isAuth, (req, res, next) => {
  console.log(req.user.animelist);
  res.json({ savedAniList: req.user.animelist });
});

module.exports = router;
