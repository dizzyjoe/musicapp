const express = require('express');
const router = express.Router();


const songsData = [
    {
      id: 1,
      artist: "The Beatles",
      songName: "Yesterday",
      albumName: "Help!",
      comments: [
        "This song is amazing!",
        "One of my all-time favorites!",
      ],
    },
    {
      id: 2,
      artist: "Drake",
      songName: "Hotline Bling",
      albumName: "Views",
      comments: [
        "Love the catchy beat!",
        "Drake's best work.",
      ],
    },
    {
      id: 3,
      artist: "Kendrick Lamar",
      songName: "HUMBLE.",
      albumName: "DAMN.",
      comments: [
        "Kendrick's lyrics are fire!",
        "Such a powerful song.",
      ],
    },
    {
      id: 4,
      artist: "Adele",
      songName: "Hello",
      albumName: "25",
      comments: [
        "Adele's voice is angelic.",
        "Hits you right in the feels.",
      ],
    },
    {
      id: 5,
      artist: "Taylor Swift",
      songName: "Love Story",
      albumName: "Fearless",
      comments: [
        "Classic Taylor!",
        "This song never gets old.",
      ],
    },
  ];

      
      
  router.get('/', (req, res) => {
    res.render('songs', { songsData: songsData });
  });
  


  module.exports = router;


