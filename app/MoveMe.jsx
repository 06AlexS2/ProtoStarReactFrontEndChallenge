"use client";
//importing required modules
import React, { useState } from "react";

import MoveableChild from "./MoveableChild";

export default function MoveMe() {
  //set the url for the image
  const IMG_URL = "https://via.placeholder.com/200x200.png?text=Move+me!";
  //with useState hook, we set the variables for position, size and rotation in the image
  //both position and size are objects that contain the properties needed for their context
  const [imgPos, setImgPos] = useState({ posX: 0, posY: 0 });
  let [imgSize, setImgSize] = useState({ width: 200, height: 200 });
  const [imgRotation, setImgRotation] = useState(0);

  //with handlePosition, we modify the parameters of the image rendering in the page
  //we need to extract the numbers from the string parameters of the transform style, so we use regex
  const handlePosition = (e) => {
    const regex = /-?\d+/g;
    //we force the value to match the regex
    const numbersArray = e.transform.match(regex);
    //now, with the react hook, we set the properties
    setImgPos({
      posX: numbersArray[0] ? parseInt(numbersArray[0]) : 0,
      posY: numbersArray[1] ? parseInt(numbersArray[1]) : 0,
    });
    //finally, using string literals, we modify the style parameters with the new position values
    e.target.style.transform = `translate(${imgPos.posX}px, ${imgPos.posY}px)`;
  };
  //same for the rotation handler as the position, we need to extract only the digits in the "rotate" style parameter
  const handleRotation = (e) => {
    const regex = /rotate\((-?\d+(?:\.\d+)?)deg\)/;

    const match = e.transform.match(regex);
    setImgRotation(parseFloat(match[1]));
    //in this case, we need not only to modify the rotation, but the translate as well, because if we don't, the values
    //will restart
    e.target.style.transform = `translate(${imgPos.posX}px, ${imgPos.posY}px) rotate(${imgRotation}deg)`;
  };

  //with resize handler, you have to set the target, and original width and height from the image
  const handleResize = ({ target, width, height }) => {
    
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    setImgSize({ width, height });
  };
  //here, we render the page, and since we're passing props to a child component, this is the final step in this script.
  return (
    <div
      className="target z-30"
    >
      <MoveableChild imgUrl={IMG_URL} handlePosition={handlePosition} handleRotation={handleRotation} handleResize={handleResize} imgSize={imgSize}/>
    </div>
  );
}
