import { useState } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";

function Square() {
  const [value, setValue] = useState(null);

  function handClick() {
    console.log("click!");
  }

  return (
    <button className="square" onClick={handClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
