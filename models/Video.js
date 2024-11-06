
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  exerciseId: String,      
  title: String,          
  fileName: String,     
  duration: Number        
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
