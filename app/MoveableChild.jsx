"use client";
import Moveable from "react-moveable";
import Image from "next/image";

/** I basically use the Moveable module, and define the ref to the image with the target parameter as a className.
   * then, I configure the draggable, rotable, resizable features as true,
   * and based on the previously defined individual functions, it does those actions to the image
   * as from the Moveable component, the parameters are target, which is the object in the DOM,
   * draggable, rotatable and resizable, which are the functions we want as true,
   * keep ratio as false, startDragRotate as 0 (start angle(degree) of x,y for throttleDragRotate when drag),
   * and the actions in case of drag, rotate and resize
   * all of those features came as props from the MoveMe component.
   */
export default function MoveableChild({
  imgUrl = "",
  handlePosition = () => {},
  handleRotation = () => {},
  handleResize = () => {},
  imgSize = { width, height },
}) {
  return (
    <div
      className=" h-3"
      style={{
        transform: "translate(0px, 0px) rotate(0deg)",
        maxWidth: "auto",
        maxHeight: "auto",
        minWidth: "auto",
        minHeight: "auto",
      }}
    >
      <Moveable
        target={".targetimg"}
        draggable={true}
        rotatable={true}
        resizable={true}
        keepRatio={false}
        rotationPosition={"top"}
        startDragRotate={0}
        throttleDragRotate={0}
        onDrag={handlePosition}
        onRotate={handleRotation}
        onResize={handleResize}
        scalable={true}
      />
      <Image
        src={imgUrl}
        width={imgSize.width}
        height={imgSize.height}
        alt="test"
        className="targetimg"
      />
    </div>
  );
}
