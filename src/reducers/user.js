

const Users = (user = {}, action) => {
  switch (action.type) {

    case "LOGIN":
      return action.payload;
    case "SIGNUP":
      return action.payload;
    default:
      return user;
  }
};
export default Users;
