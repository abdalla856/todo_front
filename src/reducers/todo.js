const Todo = (todo = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "NEW_TODO":
      return [...todo, action.payload];
    case "UPDATE_TODO":
      const newState = [...todo];
      newState[newState.findIndex((tod) => tod._id === action.payload._id)] =
        action.payload;
      return newState;
    case "DELETE_TODO":
      const id = action.payload;
      console.log(id)
      const newtodos = todo.filter((discount) => discount._id !== id);
      return newtodos;
    default:
      return todo;
  }
};
export default Todo;
