import React, { useState } from "react";
import "./Forms.css";
import SignUp from "../Signup";

const ChildForm = () => {
  const [gradeLevel, setGradeLevel] = useState(""); // Initial grade level

  const handleGradeLevelChange = (e) => {
    setGradeLevel(e.target.value);
  };
  return (
    <div className="app__form-select_container">
      <h1 className="app__signup-form_title">Account Registration</h1>
      <div className="app__child__form-input">
        <label htmlFor="childSelect">Choose Grade Level:</label>
        <br />
        <select
          className="app__signup-form_select"
          name="childSelect"
          id="childSelect"
          value={gradeLevel}
          onChange={handleGradeLevelChange}
        >
          <option value="first Grade">First Grade</option>
          <option value="second Grade">Second Grade</option>
          <option value="third Grade">Third Grade</option>
          <option value="fourth Grade">Fourth Grade</option>
          <option value="fifth Grade">Fifth Grade</option>
          <option value="sixth Grade">Sixth Grade</option>
          <option value="seventh Grade">Seventh Grade</option>
          <option value="eighth Grade">Eighth Grade</option>
          <option value="sixth Grade">Sixth Grade</option>
          <option value="freshman HS">Freshman High School</option>
          <option value="sophomore HS">Sophomore High School</option>
          <option value="junior HS">Junior High School</option>
          <option value="senior HS">Senior High School</option>
        </select>
        <SignUp gradeLevel={gradeLevel} />
      </div>
    </div>
  );
};

export default ChildForm;
