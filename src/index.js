import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let number = 0

let addOne = () => {
  number += 1
  render()
}

let minusOne = () => {
  number -= 1
  render()
}


render()

function render(){
  ReactDOM.render(
    <div className="parent">
      <span>{number}</span>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
    </div>
    , document.querySelector('#root'))
}
