import React from "react";
import "./Forms.css";

const ChildForm = () => {
  return (
    <div className="app__form-select_container">
      <h1 className="app__signup-form_title">Account Registration</h1>
      <div className="child__form-input">
        <label htmlFor="chilSelect">Choose Grade Level:</label>
        <br />
        <select name="chilSelect" id="chilSelect">
          <option value="firstGrade">First Grade</option>
          <option value="secondGrade">Second Grade</option>
          <option value="thirdGrade">Third Grade</option>
          <option value="fourthGrade">Fourth Grade</option>
          <option value="fifthGrade">Fifth Grade</option>
          <option value="sixthGrade">Sixth Grade</option>
          <option value="seventhGrade">Seventh Grade</option>
          <option value="eighthGrade">Eighth Grade</option>
          <option value="sixthGrade">Sixth Grade</option>
          <option value="freshmanHS">Freshman High School</option>
          <option value="sophomoreHS">Sophomore High School</option>
          <option value="juniorHS">Junior High School</option>
          <option value="seniorHS">Senior High School</option>
        </select>
      </div>
    </div>
  );
};

export default ChildForm;

// import "./App.css"

// const ParentForm = () => {
//   return <div>Parent Form</div>;
// };

// const ChildForm = () => {
//   return <div>Child Form</div>;
// };

// const ToggleSwitch = () => {
//   const [isParentForm, setIsParentForm] = useState(true);

//   const toggleForm = () => {
//     setIsParentForm((prevState) => !prevState);
//   };

//   return (
//     <div className="toggle-switch">
//       <label className="switch">
//         <input
//           type="checkbox"
//           checked={isParentForm}
//           onChange={toggleForm}
//         />
//         <span className="slider round"></span>
//       </label>
//       {isParentForm ? <ParentForm /> : <ChildForm />}
//     </div>
//   );
// };

// export default ToggleSwitch;
