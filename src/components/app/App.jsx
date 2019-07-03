import React, { Component } from 'react';
import Box from './../box/box';
import './App.css';

export default class App extends Component {
  state = {
    rows: 4,
    cols: 9,
    boxSize: 40
  };
  render() {
    const { rows, cols, boxSize } = this.state;
    const containerWidth = {
      width: `${boxSize * cols + cols * 2 + 2}px`,
      height: `${boxSize * rows + rows * 2 + 2}px`
    };

    let boxes = [];
    let top = 2;
    let left = 2;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        top = boxSize * i + 2 * i + 2;
        left = boxSize * j + 2 * j + 2;

        // console.log(`${i}:${j}---${top}:${left}`);
        boxes.push(
          <Box
            key={`${top}+${left}`}
            size={boxSize}
            top={top}
            left={left}
          >{`${i}${j}`}</Box>
        );
      }
    }

    return (
      <div className="app">
        <div className="container" style={containerWidth}>
          {boxes}
        </div>
      </div>
    );
  }
}
