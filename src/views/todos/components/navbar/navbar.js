import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const logout =()=>{
    localStorage.removeItem("user");
  }
  return (
    <nav className="navbar">
      {user ? 
      <h3 className="user_name">{user.name}</h3>
    :
    null  
    }
      <ul>
        <li className="login">
          {user ? 
            <Link to="/login">
              <button onClick={logout}>Logout</button>
            </Link>
           : 
            <Link to="/login">
              <button>Login</button>
            </Link>
          }
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
