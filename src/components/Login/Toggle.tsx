import React, { useState } from "react";
import "./Signup.css";
import ParentForm from "./Forms/ParentForm";
import ChildForm from "./Forms/ChildForm";
// Registration From, Login Design w/ Toggle for Parent/Guardian and Children
// Light and Dark Toggle

const AccountTypeToggle = () => {
  const [isParentForm, setIsParentForm] = useState(true);
  const toggleForm = () => {
    setIsParentForm((prevState) => !prevState);
  };

  return (
    <div className="app__toggle-container">
      <div className="app__toggle-switch">
        <label className="app__switch">
          <input type="checkbox" checked={isParentForm} onChange={toggleForm} />
          <span className="app__slider round"></span>
        </label>
        {isParentForm ? <ParentForm /> : <ChildForm />}
      </div>
    </div>
  );
};

export default AccountTypeToggle;
