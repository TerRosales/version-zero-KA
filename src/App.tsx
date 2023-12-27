import React from "react";
import "./App.css";
import AccountTypeToggle from "./components/Login/index";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app container-xl">
      <Navbar />
      <AccountTypeToggle />
    </div>
  );
}

export default App;
