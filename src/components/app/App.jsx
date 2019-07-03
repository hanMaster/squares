import React, { Component } from 'react';
import Box from './../box/box';
import AddBtn from '../buttons/addBtn';
import RemoveBtn from './../buttons/removeBtn';
import './App.css';

export default class App extends Component {
  state = {
    rows: 4,
    cols: 4,
    boxSize: 50,
    cursorX: '',
    cursorY: ''
  };
  addRow = () => {
    this.setState({ rows: this.state.rows + 1 });
  };
  delRow = () => {
    this.setState({ rows: this.state.rows - 1 });
  };

  addCol = () => {
    this.setState({ cols: this.state.cols + 1 });
  };
  delCol = () => {
    this.setState({ cols: this.state.cols - 1 });
  };

  setCoords = e => {
    this.setState({
      cursorX: e.target.style.left,
      cursorY: e.target.style.top
    });
  };

  render() {
    const { rows, cols, boxSize } = this.state;
    const containerWidth = {
      width: `${boxSize * cols + cols * 2 + 2}px`,
      height: `${boxSize * rows + rows * 2 + 2}px`
    };
    const btnStyles = {
      width: `${boxSize}px`,
      height: `${boxSize}px`,
      right: `${-(boxSize + 4)}px`,
      bottom: `${-(boxSize + 4)}px`,
      lineHeight: `${boxSize - 2}px`
    };

    let boxes = [];
    let top = 0;
    let left = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        top = boxSize * i + 2 * i + 2;
        left = boxSize * j + 2 * j + 2;
        boxes.push(
          <Box
            key={`${top}+${left}`}
            size={boxSize}
            top={top}
            left={left}
            setCoords={this.setCoords}
          />
        );
      }
    }

    return (
      <div className="app">
        <div className="container" style={containerWidth}>
          <AddBtn
            clazz={'btn btn_add_row'}
            onClick={this.addRow}
            styles={btnStyles}
          />
          <AddBtn
            clazz={'btn btn_add_col'}
            onClick={this.addCol}
            styles={btnStyles}
          />
          <RemoveBtn
            clazz={'btn btn_del_col'}
            onClick={this.delCol}
            styles={btnStyles}
            top={-(boxSize + 4)}
            left={this.state.cursorX}
            cols={this.state.cols}
          />
          <RemoveBtn
            clazz={'btn btn_del_row'}
            onClick={this.delRow}
            styles={btnStyles}
            top={this.state.cursorY}
            left={-(boxSize + 4)}
            rows={this.state.rows}
          />

          {boxes}
        </div>
      </div>
    );
  }
}
