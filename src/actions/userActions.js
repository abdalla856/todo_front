import * as api from "../api";

export const signUp = (user) => async (dispatch) => {
  try {
    let res = await api.signup(user);
    dispatch({ type: "SIGNUP", payload: res.data });
    if (res.data.success === true) return true;
    else return false;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};
export const login = (user) => async (dispatch) => {
  try {
    let res = await api.login(user);
    dispatch({ type: "LOGIIN", payload: res.data });
    if (res.data.success === true) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res.data;
    }
  } catch (err) {
    console.log(err.message);
    console.log(err.response.data);
    return err.response.data;
  }
};

