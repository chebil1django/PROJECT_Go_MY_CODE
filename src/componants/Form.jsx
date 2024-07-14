import React, { useState } from "react";

const Form = ({ setTasks, Tasks }) => {
  const getRandomInt =(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setTasks([...Tasks, { popUp: input,  geocode: [getRandomInt(36.86, 36.87), getRandomInt(10.14, 10.15)],done:false
    }]);
  };
  return (
    <form id="todo-form" className="flex" onSubmit={handleSubmit}>
      <span></span>
      <input
        type="text"
        id="add"
        placeholder="Create new todo ...."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
    </form>
  );
};

export default Form;
