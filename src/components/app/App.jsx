import React, { Component } from 'react';
import Box from './../box/box';
import './App.css';

export default class App extends Component {
  state = {
    rows: 4,
    cols: 4,
    boxSize: 50
  };
  addRow = () => {
    this.setState({ rows: this.state.rows + 1 });
  };

  addCol = () => {
    this.setState({ cols: this.state.cols + 1 });
  };

  render() {
    const { rows, cols, boxSize } = this.state;
    const containerWidth = {
      width: `${boxSize * cols + cols * 2 + 2}px`,
      height: `${boxSize * rows + rows * 2 + 2}px`
    };

    let boxes = [];
    let top = 0;
    let left = 0;
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
          <button className="btn btn_add_row" onClick={this.addRow}>
            +
          </button>
          <button className="btn btn_add_col" onClick={this.addCol}>
            +
          </button>

          {boxes}
        </div>
      </div>
    );
  }
}
