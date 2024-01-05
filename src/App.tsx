import React, { useState } from "react";
import "./App.css";
import AccountTypeToggle from "./components/Login/Toggle";
import Navbar from "./components/Navbar/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Leaderboards from "./components/Leaderboards/Leaderboards";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
 

  return (
    <div className="app container-xl">
    <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/leaderboards" element={<Leaderboards />} />
      {isLoggedIn ? (
        <>
          {/* Routes accessible only when logged in */}
          {/* <Route path="/leaderboards" element={<Leaderboards />} /> */}
          {/* Redirect to "/dashboard" after successful login */}
        </>
      ) : (
        // Routes accessible only when not logged in
        // Add other routes or components as needed
        <Route
          path="/login"
          element={<AccountTypeToggle setLoggedIn={setLoggedIn} />}
        />
      )}
    </Routes>
      {/* <Navbar /> */}
      {/* <AccountTypeToggle /> */}
    </div>
  );
};

export default App;
