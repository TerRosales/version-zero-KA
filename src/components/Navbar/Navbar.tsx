import "./Navbar.css";
import React, { useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //TO-DO
  // responsive
  // edit style
  // connect login with authenthication
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      // Handle successful login - e.g., set user authentication state, redirect, etc.
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login failure - e.g., display error message
      console.error("Login failed:", error);
    }
  };
  return (
    <nav className="app__nav container-2xl">
      <div className="text-white text-sm">KidAdult</div>
      <button className="leaderboards__button">Leaderboard</button>
      <div className="text-white flex items-center space-x-2">
        <label htmlFor="username">Login:</label>
        <input
          type="text"
          id="username"
          className="app__nav-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="app__nav-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="custom__button bg-red-500 text-white py-1 px-2 rounded-sm"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
