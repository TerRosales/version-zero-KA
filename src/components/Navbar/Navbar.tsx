import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Login from "../Login/Login";

const Navbar = () => {
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const navigate = useNavigate(); // Add this line
  const handleLoginClick = () => {
    setShowLoginMenu(!showLoginMenu);
  };

  const closeLoginMenu = () => {
    setShowLoginMenu(false);
  };

  return (
    <nav className="app__nav container-2xl">
      <Link to="/" className="text-white text-sm">
        KidAdult
      </Link>
      <NavLink
        to="/leaderboards"
        className="leaderboards__button"
        onClick={() => navigate("/leaderboard")}
      >
        Leaderboard
      </NavLink>
      <NavLink
        to="/login"
        className="leaderboards__button"
        onClick={handleLoginClick}
      >
        Login
      </NavLink>
      {showLoginMenu && <Login onClose={closeLoginMenu} />}
    </nav>
  );
};

export default Navbar;
