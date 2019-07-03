import React from 'react';

const RemoveBtn = ({ clazz, styles, onClick, left, top, cols, rows }) => {
  let display = undefined;
  if ((cols && cols < 2) || (rows && rows < 2)) {
    display = 'none';
  }
  const newStyles = { ...styles, left, top, display };
  return (
    <button className={clazz} onClick={onClick} style={newStyles}>
      -
    </button>
  );
};
export default RemoveBtn;
