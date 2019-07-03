import React from 'react';

const Box = ({ size, top, left, children, setCoords }) => {
  const boxStyles = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}px`,
    left: `${left}px`
  };
  return (
    <div className="absBox" style={boxStyles} onMouseMove={setCoords}>
      {children}
    </div>
  );
};
export default Box;
