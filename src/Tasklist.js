import React, { useState } from "react";
import "./TaskList.css";
function Tasklist() {
  const onDeleteClick = () => {
    console.log("Inside delete");
  };
  const onDoneClick = () => {
    console.log("Inside done");
  };
  const [task, settask] = useState("");
  return (
    <div className="hero">
      <h4>TaskList</h4>
      <div className="Inputtask">
        <input
          placeholder="Your Tasks"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button>submit</button>
      </div>
      <div className="UIcard">
        <div className="content">
          <h5>Friends of Veronika</h5>
          <div className="twobuttons">
            <button className="button1" onClick={() => onDoneClick()}>
              Done
            </button>
            <button className="button2" onClick={() => onDeleteClick()}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasklist;
