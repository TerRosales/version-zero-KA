import React from "react";
import "./App.css";
import Login from "./components/Login/index";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="white">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
