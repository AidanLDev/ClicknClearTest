const express = require('express');
const router = express.Router();
const musicController = require('../controller/music');

//  GET /songs
router.get('/songs', musicController.getAllSongs);

// GET /song/:songId
router.get('/song/:songId', musicController.getSongById);

module.exports = router;
