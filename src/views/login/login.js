import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { login } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Send form data to server or perform other actions here
    console.log("Email:", email);
   console.log("Password:", password);
   const res= await   dispatch(login({ email, password }));
    if(res.success){
      alert(res.message)
      navigate('/list')
    }else{
      alert(res.message)

    }
    
  };
  const user = useSelector((state) => state.Users);

    console.log(user)
    return (
    <form className="login_form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email" className="login_label">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="login_input"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password" className="login_label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="login_input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <button type="submit" className="login_btn">
        Login
      </button>
      <Link to="/">Signup</Link>
    </form>
  );
}

export default LoginForm;
