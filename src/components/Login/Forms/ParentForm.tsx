import React from "react";
import "./Forms.css";

const ParentForm = () => {
  return (
    <div className="app__form-select_container">
      <h1 className="app__signup-form_title">Account Registration</h1>
      <div className="parent__form-input">
        <h2></h2>
        <label htmlFor="parentSelect">Choose Guardianship:</label>
        <br />
        <select name="parentSelect" id="parentSelect">
          <option value="Guardian">Guardian</option>
          <option value="Teacher">Teacher</option>
          <option value="Parent">Parent</option>
        </select>
      </div>
    </div>
  );
};

export default ParentForm;
