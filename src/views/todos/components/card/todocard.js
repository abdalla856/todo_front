import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, UpdateTodo } from "../../../../actions/todoActions";
import moment from 'moment'
import "./todocard.css";

function TodoCard({ title, date, id }) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState(title);
  const [time, setTime] = useState(date);
  const dispatch = useDispatch();
  const handleEditClick = () => {
    setIsVisible(!isVisible);
  };
  const handleupdate = () => {
    dispatch(
      UpdateTodo({
        id: id,
        text: text,
        time: time,
      })
    );
    setIsVisible(false);
  };
  const handleDeleteClick =()=>{
    dispatch(deleteTodo(id))
  }
  return (
    <div className="todo-card">
      <div className="todo-details">
        <h2>{title}</h2>
      </div>
      <div className="todo-actions">
        <button onClick={handleEditClick}>Update</button>
        <button onClick={handleDeleteClick} className="delete">
          Delete
        </button>

        {date !== null ? (
          <span className="notification-date">Due date:
          {console.log(moment(date))}
          
           {moment(date ).format('llll') }</span>
        ) : (
          ""
        )}
      </div>
      {isVisible && (
        <div className={`modal ${isVisible ? "visible" : ""}`}>
          <form className="todo-form">
            <h3>Edit Task</h3>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              onChange={(e) => setText(e.target.value)}
            />

            <label htmlFor="due-date">Due Date:</label>
            <input
              type="datetime-local"
              id="due-date"
              onChange={(e) => setTime(e.target.value)}
            />
            <button type="submit" onClick={handleupdate}>
              Update
            </button>
            <button onClick={() => setIsVisible(false)}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TodoCard;
