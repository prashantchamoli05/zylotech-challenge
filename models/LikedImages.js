const mongoose = require("mongoose");
const ImagesSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = LikedImages = mongoose.model("images", ImagesSchema);
