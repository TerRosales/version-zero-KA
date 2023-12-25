import React, { useState } from 'react';
import SignUp from './Signup'
import "./Login.css"
import ParentForm from '../Login/Forms/ParentForm';
import ChildForm from '../Login/Forms/ChildForm';
// Registration From, Login Design w/ Toggle for Parent/Guardian and Children
// Light and Dark Toggle



const Login = () => {
  const [isParentForm, setIsParentForm] = useState(true);
  const toggleForm = () => {
    setIsParentForm((prevState) => !prevState);
  };
  return (
    <div className="app__toggle-container">
      <div className="toggle-switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={isParentForm}
            onChange={toggleForm}
          />
          <span className="slider round"></span>
        </label>
        {isParentForm ? <ParentForm /> : <ChildForm />}
      
      <SignUp/>
      </div>
    </div>
    );
}


export default Login