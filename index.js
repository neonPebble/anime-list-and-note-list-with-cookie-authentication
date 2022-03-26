const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
var passport = require("passport");
var crypto = require("crypto");
var routes = require("./api/allroutes.js"); // This uses the index.js file in routes folder. To change this you can change the main property in package.json(package.json inside the required folder) to something else(say apiroutes.js)
const isAuth = require("./api/authmidlware.js").isAuth;

const connection = require("./config/database");

const MongoStore = require("connect-mongo");

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require("dotenv").config();

// Create the Express application
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * -------------- SESSION SETUP ----------------
 */

const sessionStore = MongoStore.create({
  mongoUrl: process.env.DB_STRING,
  collectionName: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (im mili seconds)
    },
  })
);

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

// Need to require the entire Passport config module so app.js knows about it
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

/*app.use((req, res, next) => {
   console.log(req.session);
   console.log(req.user);
  next();
});*/

/**
 * -------------- ROUTES ----------------
 */

// use  all of the routes from ./api/index.js
app.use(routes);

/*
express.static(root, [options])
root - root directory from which to serve static assets
options is an object not array.
options example :
const options =  {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  redirect: false,
  setHeaders: function (res,path,stat) {
    res.set('x-timestamp', Date.now())
  }
}
*/

// --------- WHEN NOT DEPLOYING TO VERCEL UNCOMMENT ---------

app.use("/", express.static(path.join(__dirname, "public/static/dist")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/static/dist", "index.html"));
});

/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:5050
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
