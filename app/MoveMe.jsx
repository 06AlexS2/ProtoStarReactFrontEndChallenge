"use client";
//importing required modules
import React, { useState } from "react";

import MoveableChild from "./MoveableChild";

export default function MoveMe() {
  //set the url for the image
  const IMG_URL = "https://via.placeholder.com/200x200.png?text=Move+me!";
  //with useState hook, I set the variables for position, size and rotation in the image
  //both position and size are objects that contain the properties needed for their context
  const [imgPos, setImgPos] = useState({ posX: 0, posY: 0 });
  let [imgSize, setImgSize] = useState({ width: 200, height: 200 });
  const [imgRotation, setImgRotation] = useState(0);

  //with handlePosition, I modified the parameters of the image rendering in the page
  //I needed to extract the numbers from the string parameters of the transform style, so I used regex
  const handlePosition = (e) => {
    const regex = /-?\d+/g;
    //I forced the value to match the regex
    const numbersArray = e.transform.match(regex);
    //now, with the react hook, I set the properties
    setImgPos({
      posX: numbersArray[0] ? parseInt(numbersArray[0]) : 0,
      posY: numbersArray[1] ? parseInt(numbersArray[1]) : 0,
    });
    //finally, using string literals, I modify the style parameters with the new position values
    e.target.style.transform = `translate(${imgPos.posX}px, ${imgPos.posY}px)`;
  };
  //same for the rotation handler as the position, it needs to extract only the digits in the "rotate" style parameter
  const handleRotation = (e) => {
    const regex = /rotate\((-?\d+(?:\.\d+)?)deg\)/;

    const match = e.transform.match(regex);
    setImgRotation(parseFloat(match[1]));
    //in this case, I need not only to modify the rotation, but the translate as well, because if I don't, the values
    //will restart
    e.target.style.transform = `translate(${imgPos.posX}px, ${imgPos.posY}px) rotate(${imgRotation}deg)`;
  };

  //with resize handler, you have to set the target, and original width and height from the image
  const handleResize = ({ target, width, height }) => {
    
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    setImgSize({ width, height });
  };
  //here, I render the page, and since I'm passing props to a child component, this is the final step in this script.
  return (
    <div
      className="target z-30"
    >
      <MoveableChild imgUrl={IMG_URL} handlePosition={handlePosition} handleRotation={handleRotation} handleResize={handleResize} imgSize={imgSize}/>
    </div>
  );
}
