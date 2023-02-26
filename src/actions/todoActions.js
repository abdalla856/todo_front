import * as api from "../api";

export const todolist = (id) => async (dispatch) => {
  try {
    const res = await api.todosList(id);
    dispatch({ type: "FETCH_TODOS", payload: res.data });
  } catch (err) {
    console.log(err.message);
    console.log(err.response.data);
    return err.response.data;
  }
};

export const Addtodo = (todo) => async (dispatch) => {
  try {
    const res = await api.addtodo(todo);
    dispatch({ type: "NEW_TODO", payload: res.data.todo });
  } catch (err) {
    console.log(err.message);
  }
};
export const UpdateTodo = (todo) => async (dispatch) => {
  try {
    const res = await api.updateTodo(todo);
    dispatch({ type: "UPDATE_TODO", payload: res.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res= await api.deleteTodo(id);
    dispatch({ type: "DELETE_TODO", payload: id });
  } catch (err) {}
};
