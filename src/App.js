import React, { Component } from "react";
import Main from "./main/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
