import React from "react";

const SingleTask = ({ singleTask, taskIndex, setTasks, Tasks }) => {
  console.log(singleTask)
  const { popUp, done } = singleTask;
  const handlechange = () => {
    const newTasks = [...Tasks];
    newTasks[taskIndex].done = !newTasks[taskIndex].done;
    setTasks(newTasks);
  };
  const deleteFn = () => {
    let newTasks = [...Tasks];
    newTasks = newTasks.filter((v) => v !== newTasks[taskIndex]);
    setTasks(newTasks);
  
  };
  return (
    <div className="single-task flex between">
      <div className="flex">
        <form className="checked">
          <input
            type="checkbox"
            className="state"
            checked={done}
            onChange={handlechange}
          />
        </form>
        <p className={`${done ? "lined" : "not-lined"}`}> {popUp} </p>
      </div>
      <button className="delete" onClick={deleteFn}>
        <img src="./images/icon-cross.svg" alt="icon-cross" />
      </button>
    </div>
  );
};

export default SingleTask;
