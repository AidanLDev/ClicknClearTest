const { tracks } = require('../../data/tracks.json');

// GET /songs
exports.getAllSongs = (req, res, next) => {
  res.send(tracks);
};

// GET /song/:songId
exports.getSongById = (req, res, next) => {
  const songId = req.params.songId;

  // for each track check if the songId matches param sent to /song
  const track = tracks.filter((track) => track.id === +songId);
  res.send(track);
};
