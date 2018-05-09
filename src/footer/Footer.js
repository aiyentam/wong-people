import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span>
          <i class="material-icons">call</i>(202)494-3700
          <i class="material-icons">place</i>
        </span>
      </div>
    );
  }
}

export default Footer;
