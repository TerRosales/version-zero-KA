import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    emailAddress: "",
    securityPin: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/signup",
        formData
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form>
        {/* Add your form fields and input handlers */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="securityPin"
          placeholder="Security Pin"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
