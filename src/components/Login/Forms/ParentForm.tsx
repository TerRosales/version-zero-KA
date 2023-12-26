import React, { useState } from 'react';
import "./Forms.css"

const ParentForm = () => {
  return (
    
    <div className="app__form-select_container">
      <h1 className="app__signup-form_title">Account Registration</h1>
    <div className='parent__form-input'>
      <h2></h2>
      <label htmlFor="parentSelect" >
        Choose Guardianship: 
      </label>
      <br />
      <select name="parentSelect" id="parentSelect">
        
        <option value="Guardian">Guardian</option>
        <option value="Teacher">Teacher</option>
        <option value="Parent">Parent</option>
      </select>
    </div>
    </div>
  )
}

export default ParentForm


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