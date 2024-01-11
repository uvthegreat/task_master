import React from "react";
import { useState } from "react";

export default function AddTask(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault(); // prevents reload when submit is clicked
    if (!title || !desc) {
      alert("Title and description must not be empty");
    } else {
      props.onAdd(title, desc);
    }
    settitle("");
    setdesc("");
  };

  return (
    <>
      <div className="container mb-3">
        <h3>Add a Task</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label fs-5">
              Task Title
            </label>
            <input
              type="text"
              className="form-control fs-6"
              id="title"
              aria-describedby="emailHelp"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            {/* onChange attribute is important to update the title value in real time
              as it can only be update by its useState so we give a function in onChange attribute  */}
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label fs-5">
              Task Description
            </label>
            <input
              type="text"
              className="form-control fs-6"
              id="desc"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-success fs-6">
            + Add
          </button>
        </form>
      </div>
    </>
  );
}
