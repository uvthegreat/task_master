import logo from "./logo.svg";
import "./App.css";
import Header from "./My Components/Header";
import AddTask from "./My Components/AddTask.js";
import TaskContainer from "./My Components/TaskContainer.js";
import Footer from "./My Components/Footer.js";
import About from "./My Components/about.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let localTaskList;
  if (localStorage.getItem("taskList") === null) {
    localTaskList = [];
  } else {
    localTaskList = JSON.parse(localStorage.getItem("taskList"));
  }

  // we cannot directly change the values of input text in react so we use react hook called
  // useState and it can only be updated by setTaskList function.
  const [taskList, setTaskList] = useState(localTaskList);

  const onDelete = (task) => {
    const newTaskList = taskList.filter((e) => {
      return e !== task;
    });
    if (newTaskList.length === 0) {
    }
    setTaskList(newTaskList);
    // console.log(newTaskList);
    // console.log(taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  const onAdd = (title, desc) => {
    let newtno;
    if (taskList.length === 0) {
      newtno = 1;
    } else {
      newtno = taskList[taskList.length - 1].tno + 1;
    }
    const newTask = {
      tno: newtno,
      title: title,
      desc: desc,
    };
    setTaskList([...taskList, newTask]);
    // console.log(taskList);
  };

  // sometimes useState function does not change the tasklist immediately
  // so we have to use another hook called use effect which saves tasklist
  // in localStorage whenever there is a change in the tasklist
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <Router>
        <Header />

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route
            exact
            path="/task_master/"
            element={
              <>
                <AddTask onAdd={onAdd} />
                <TaskContainer taskList={taskList} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/task_master/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
