import React, { Component } from "react";
import "./Exercise.css";
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            style_header,

            // color: "red", backgroundColor: "lightblue"
          }}
        >
          Header
        </h1>
        <p className="para">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <a href="https://google.com">Click to go to google!</a>
        <br />
        <img src="https://picsum.photos/id/25/200/300" />
      </div>
    );
  }
}

export default Exercise;
