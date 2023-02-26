import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import "./signup.css";
function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or perform other actions here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    dispatch(signUp({ name, email, password }))
      ? navigate("/login")
      : alert("a problem happened please try again");
  };

  return (
    <form className="signup_form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label className="signup_label" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="signup_input"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email" className="signup_label">
        Email:
      </label>
      <input
        type="email"
        className="signup_input"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password" className="signup_label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="signup_input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <button type="submit" className="signup_btn">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
