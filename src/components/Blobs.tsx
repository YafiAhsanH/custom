import React from "react";

const Blobs = ({
  top,
  bottom,
  left,
  right,
}: {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}) => {
  return (
    <div
      className={`blob h-screen w-[90vw] absolute -z-10 top-[${top}] bottom-[${bottom}] left-[${left}] right-[${right}]`}
    ></div>
  );
};

export default Blobs;
