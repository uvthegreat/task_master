import React from "react";
import TaskItem from "./TaskItem.js";

export default function TaskContainer(props) {
  // console.log(props)
  let mystyle = {
    minHeight: "42vh",
  };
  return (
    <div className="container" style={mystyle}>
      <p className="fs-4 my-3">Task to complete</p>
      {props.taskList.length == 0
        ? "No task to Complete"
        : props.taskList.map((task) => {
            // for map function we always have to pass a key value.
            return (
              <TaskItem task={task} key={task.tno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
