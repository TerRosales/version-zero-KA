import React, { useState } from 'react';

const ParentForm = () => {
  return (
    <div>ParentForm</div>
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