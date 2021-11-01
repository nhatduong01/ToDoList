import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskList.css";
function Tasklist() {
  const onDeleteClick = (taskid) => {
    axios.delete(`http://localhost:4000/deletetask/${taskid}`);
    getTaskList();
  };
  const onDoneClick = () => {
    console.log("Inside done");
  };
  const getTaskList = () => {
    axios
      .get("http://localhost:4000/task")
      .then((response) => response.data)
      .then((response) => setlist(response));
  };
  const onSubmitClick = () => {
    axios.post("http://localhost:4000/addtask", {
      newtask: task,
    });
    getTaskList();
  };
  const [list, setlist] = useState([]);
  const [task, settask] = useState("");
  useEffect(() => {
    getTaskList();
    return () => {};
  }, []);
  return (
    <div className="hero">
      <h4>TaskList</h4>
      <div className="Inputtask">
        <input
          placeholder="Your Tasks"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button onClick={() => onSubmitClick()}>submit</button>
      </div>
      <div className="UIcard">
        {list.map((task) => (
          <div className="content">
            <h5>{task.Name}</h5>
            <div className="twobuttons">
              <button className="button1" onClick={() => onDoneClick()}>
                Done
              </button>
              <button
                className="button2"
                onClick={() => onDeleteClick(task.TaskID)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasklist;
