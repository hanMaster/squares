import React from 'react';

const Box = ({ size, top, left, children }) => {
  const boxStyles = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}px`,
    left: `${left}px`
  };
  return (
    <div className="absBox" style={boxStyles}>
      {children}
    </div>
  );
};
export default Box;
