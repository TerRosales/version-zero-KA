import React from "react";
import "./Navbar.css"

const Navbar = () => {
  //TO-DO
  // responsive
  // edit style
  // connect login with authenthication
  return (
    <nav className="container-2xl bg-teal-900 p-4 flex justify-between items-center">
      <div className="text-white text-sm">KidAdult</div>
      <button className="leaderboards__button">
        Leaderboard
      </button>
      <div className="text-white flex items-center space-x-2">
        <label htmlFor="username">Login:</label>
        <input
          type="text"
          id="username"
          className="border rounded px-2 py-1 text-sm"
          placeholder="Username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="border rounded px-2 py-1 text-sm"
          placeholder="Password"
        />
        <button
          type="button"
          className="custom__button bg-red-500 text-white py-1 px-2 rounded-sm"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
