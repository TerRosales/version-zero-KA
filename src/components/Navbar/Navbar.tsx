import React from "react";

const Navbar = () => {
  //TO-DO
  // responsive
  // edit style
  // connect login with authenthication
  return (
    <div className="bg-teal-900 p-4 flex justify-between items-center">
      <div className="text-white text-sm">KidAdult</div>
      <div className="bg-red-500 text-white p-2 rounded mx-auto">
        Leaderboard
      </div>
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
          className="bg-red-500 text-white py-1 px-2 rounded-sm"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
