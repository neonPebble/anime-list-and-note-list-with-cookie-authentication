function searchAnimIndex(userAniList, animeId) {
  for (let i = 0; i < userAniList.length; i += 1) {
    if (userAniList[i].id === animeId) {
      return i;
    }
  }
  return false;
}

module.exports.searchAnimIndex = searchAnimIndex;
