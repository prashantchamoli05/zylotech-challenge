import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import LikedImages from "./components/LikedImages";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ImageGallery} />
          <Route exact path="/likes" component={LikedImages} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
