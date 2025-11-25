import React from "react";
import "./icardstyle.css";
import image from "./image.png"; // remove this if no image

function Icard() {
  return (
    <div className="container">
      <img src={image} alt="Student" className="photo" />
      <h2>Divya Singh</h2>
      <p>Roll No: 12345</p>
      <p>Course: B.Tech (CSE)</p>
    </div>
  );
}

export default Icard;
