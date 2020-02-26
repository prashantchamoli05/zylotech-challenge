import React, { Fragment } from "react";

const ImageThumbNail = ({ url }) => {
  return (
    <Fragment>
      <img
        src={url}
        alt="refresh page if doesn't load after few seconds more"
        style={{ width: "30%", height: "300px", padding: "5px" }}
      />
    </Fragment>
  );
};

export default ImageThumbNail;
