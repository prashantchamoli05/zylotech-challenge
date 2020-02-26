import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageThumbnail from "./ImageThumbNail";
import Spinner from "./Spinner";

const LikedImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchLikes() {
      try {
        const res = await axios.get("http://localhost:5000/images/liked");
        // res.data.forEach(image => setImages([...images, image]));
        setImages(res.data);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
    fetchLikes();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {images.length === 0 ? (
        <Fragment>
          <Spinner />
          <h2>
            If you haven't liked any of the images, then go to home page and
            like to see your favourite photos here
          </h2>
        </Fragment>
      ) : (
        images.map(image => (
          <ImageThumbnail key={image._id} url={image.imageUrl} />
        ))
      )}
      <br />
      <Link to="/">Back to home page</Link>
    </div>
  );
};
export default LikedImages;
