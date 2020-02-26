import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const ImageGallery = () => {
  const [imgUrl, setImageUrl] = useState(
    "https://images.dog.ceo/breeds/mountain-bernese/n02107683_522.jpg"
  );

  // function to get another image on page
  const setAnotherImage = async () => {
    try {
      setImageUrl("dummy");
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");

      setImageUrl(res.data.message);
    } catch (err) {
      alert("Something went wrong, please try again");
    }
  };

  // function to like image
  const likeImage = async () => {
    try {
      // dog breed and image part from url only.
      const dogUrl = imgUrl.substring(30).split("/");
      const breed = dogUrl[0];
      const image = dogUrl[1];
      const res = await axios.post(
        `http://localhost:5000/like/image/breed/${breed}/image/${image}`
      );

      alert(res.data.msg);
    } catch (err) {
      alert("Something went wrong, please try again");
    }
  };

  return imgUrl === "dummy" ? (
    <Spinner />
  ) : (
    <div style={{ textAlign: "center" }}>
      <img
        src={imgUrl}
        style={{ width: "50%", height: "400px", margin: "auto" }}
        alt="refresh page if doesn't load after few seconds more"
      />
      <br />
      <button
        type="button"
        style={{ margin: "5px" }}
        onClick={() => likeImage()}
      >
        Like this image
      </button>
      <button
        type="button"
        style={{ margin: "5px" }}
        onClick={() => setAnotherImage()}
      >
        See another image
      </button>
      <br />
      <br />
      <Link to="/likes">See your liked images</Link>
    </div>
  );
};

export default ImageGallery;
