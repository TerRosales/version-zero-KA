import React, { useState } from "react";
import axios from "axios";
import "../Navbar/Navbar.css";
import { useNavigate } from "react-router-dom";
import LoggedIn from "./LoggedIn";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      const userData = response.data;
      // Handle successful login - e.g., set user authentication state, redirect, etc.
      console.log("Login successful:", response.data);

      // Update the isLoggedIn state
      setLoggedIn(true);
      console.log("rerouting");
      navigate("/dashboard", { state: { user: userData } });
      // Redirect to the dashboard after successful login
    } catch (error) {
      // Handle login failure - e.g., display error message
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    // TO-DO: Implement logout logic (clear authentication state, etc.)
    // For now, let's just update the state and redirect to the home page
    setLoggedIn(false);
  };
  return (
    <div className="app__login-form text-white flex items-center space-x-2">
      {!isLoggedIn ? (
        <>
          <label htmlFor="username">Login:</label>
          <input
            type="text"
            id="username"
            className="app__login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="app__login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="app__login-forgotPW" href="#">
            Forgot Password?
          </a>
          <button type="button" className="login__button" onClick={handleLogin}>
            Login
          </button>
        </>
      ) : (
        <>
          <LoggedIn />
          <button
            type="button"
            className="logout__button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
