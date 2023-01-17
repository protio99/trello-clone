import React from "react";
import "./../styles/board.css";

export default function Board() {
  return (
    <main className="board">
      <div className="board--column">
        <h3 className="board--column--tittle">To-do</h3>
      </div>
      <div className="board--column">
        <h3 className="board--column--tittle">Doing</h3>
      </div>
      <div className="board--column">
        <h3 className="board--column--tittle">Done</h3>
      </div>
    </main>
  );
}
