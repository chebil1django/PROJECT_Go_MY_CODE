import React, { useState, useEffect } from "react";
import SingleTask from "./SingleTask";

const TasksManager = ({ Tasks, setTasks }) => {
  const [doneArr, setDoneArr] = useState([]);
  const [active, setActive] = useState([]);
  const [toDisplay, setToDisplay] = useState([...Tasks]);
 
  useEffect(() => {
    setToDisplay([...Tasks]);
    const doneCopy = [...Tasks].filter((v, i) => v.done);
    setDoneArr(doneCopy);
    const activeCopy = [...Tasks].filter((v, i) => !v.done);
    setActive(activeCopy);
  }, [Tasks]);

  return (
    <section id="tasks-management">
      <div id="tasks-wrap">
        {toDisplay.map((v, index) => (
          <SingleTask
            key={index}
            singleTask={v}
            taskIndex={index}
            Tasks={Tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
      <hr />
      <div className="filters flex between">
        <div>
          <span id="active-number"> {active.length} </span>
          <span> items left</span>
        </div>
        <div className="filter-btn">
          <button
            className="all"
            onClick={() => {
              setToDisplay([...Tasks]);
            }}
          >
            All
          </button>
          <button
            className="active"
            onClick={() => {
              setToDisplay([...active]);
            }}
          >
            Active
          </button>
          <button
            className="completed"
            onClick={() => {
              setToDisplay([...doneArr]);
            }}
          >
            Completed
          </button>
        </div>
        <button
          className="clear-completed"
          onClick={() => {
            setTasks([...active]);
          }}
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
};

export default TasksManager;
