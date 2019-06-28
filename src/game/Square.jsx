import React from 'react';
import './Square.scss';

function Square(props) {
  return (
    <button className="Square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;