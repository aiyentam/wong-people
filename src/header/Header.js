import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src="images/wong-logo-shadow.png" className="logo" />
        </Link>
        <div className="nav">
          <Link to="/">Home</Link> | {""}
          <Link to="/about">About</Link> | {""}
          <Link to="/gallery">Gallery</Link> | {""}
          <Link to="/events">Events</Link> | {""}
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Header;
