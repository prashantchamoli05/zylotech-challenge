const express = require("express");
const app = express();
const connectDB = require("./config/db");
const LikedImages = require("./models/LikedImages");
const cors = require("cors");

// connect database
connectDB();

// enable cors
app.use(cors());

// my API endpoints

// API to like an image and save in database.
app.post("/like/image/breed/:breed/image/:img", async (req, res) => {
  try {
    let image = await LikedImages.findOne({
      imageUrl: `https://images.dog.ceo/breeds/${req.params.breed}/${req.params.img}`
    });

    if (image) {
      return res.status(200).json({ msg: "Image already liked" });
    }
    image = new LikedImages({
      imageUrl: `https://images.dog.ceo/breeds/${req.params.breed}/${req.params.img}`
    });
    await image.save();
    // console.log(`breed: ${req.params.breed} and image: ${req.params.img}`);
    return res.status(200).json({ msg: "Image liked" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal server error" });
  }
});

// API to return all liked images.
app.get("/images/liked", async (req, res) => {
  try {
    const images = await LikedImages.find();
    return res.status(200).json(images);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

// listen on environment port for hosting platforms, or use 5000 port locally.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
