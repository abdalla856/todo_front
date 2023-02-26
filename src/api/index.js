import axios from "axios";

const userUrl = "https://todo-back-r6os.onrender.com/api";

export const signup = (user) =>
  axios.post(`${userUrl}/signup`, user, {
    headers: { "Content-Type": "application/json" },
  });
export const login = (user) =>
  axios.post(`${userUrl}/login`, user, {
    headers: { "Content-Type": "application/json" },
  });

export const todosList = (id) => axios.get(`${userUrl}/todos/${id}`);
export const addtodo = (todo) =>
  axios.post(`${userUrl}/addtodo`, todo, {
    headers: { "Content-Type": "application/json" },
  });

export const updateTodo = (todo) =>
  axios.put(`${userUrl}/update_todo`, todo, {
    headers: { "Content-Type": "application/json" },
  });

  export const deleteTodo =(id)=> axios.delete(`${userUrl}/delete_todo/${id}`)