import React from 'react'

export default function TaskItem(props) {
   
  return (
    <>
    <div className="container">
    <div className="card mb-1">
        <div className="card-body">
          <h5 className="card-title">{props.task.title}</h5>
          <p className="card-text">{props.task.desc}</p>
          <button className="btn btn-danger" onClick={()=>props.onDelete(props.task)}>Delete</button>
        </div>
      </div>
    </div>
    </>
  )
}
