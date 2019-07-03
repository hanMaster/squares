import React from 'react';

const AddBtn = ({ clazz, styles, onClick }) => {
  return (
    <button className={clazz} onClick={onClick} style={styles}>
      +
    </button>
  );
};
export default AddBtn;
