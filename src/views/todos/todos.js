import React, { useState, useEffect } from "react";
import TodoCard from "./components/card/todocard";
import Navbar from "./components/navbar/navbar";
import "./todos.css";

import { useSelector, useDispatch } from "react-redux";
import { Addtodo, todolist } from "../../actions/todoActions";
const user = JSON.parse(localStorage.getItem("user"));
function TODO() {
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todolist(user._id));
  }, []);
  const todos = useSelector((state) => state.Todo);
  console.log(todos);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(Addtodo({ text: newTask, userId: user._id }));
    alert("task added Succeffully");
  };

  return (
    <div className="App">
      <Navbar />
      <h1>To-Do List</h1>
      <form className="todo_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo_input"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="todo_btn"
          disabled={user ? false : true}
        >
          Add Task
        </button>
      </form>
      <ul className="todos_list">
        {todos.length === 0 ? (
          <div>No task to display</div>
        ) : (
          todos.map((todo, index) => (
            <li key={todo._id}>
              <TodoCard title={todo.text} date={todo.date} id={todo._id}/>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TODO;
