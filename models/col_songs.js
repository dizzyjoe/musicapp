const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  song_name: string,
  album_name: string,
  artist_name: string,
  song_track_num: Number
}, {
  Timestamp: true
});