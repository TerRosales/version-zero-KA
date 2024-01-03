import React, { useState } from "react";
import "./Forms.css";
import SignUp from "../Signup";

const ParentForm = () => {
  const [guardianship, setGuardianship] = useState("Guardian");

  const handleGuardianshipChange = (e) => {
    setGuardianship(e.target.value);
  };

  return (
    <div className="app__form-select_container">
      <h1 className="app__signup-form_title">Account Registration</h1>
      <div className="parent__form-input">
        <h2></h2>
        <label htmlFor="parentSelect">Choose Guardianship:</label>
        <br />
        <select
          className="app__signup-form_select "
          name="parentSelect"
          id="parentSelect"
          value={guardianship}
          onChange={handleGuardianshipChange}
        >
          <option value="Guardian">Guardian</option>
          <option value="Teacher">Teacher</option>
          <option value="Parent">Parent</option>
        </select>
        <SignUp guardianship={guardianship} />
      </div>
    </div>
  );
};

export default ParentForm;
