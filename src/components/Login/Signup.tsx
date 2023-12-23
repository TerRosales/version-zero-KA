import React, { useState } from "react";
import axios from "axios";

interface FormData {
  username: string;
  emailAddress: string;
  securityPin: string;
  password: string;
}

const SignUp = () => {
  const initialFormData: FormData = {
    username: "",
    emailAddress: "",
    securityPin: "",
    password: "",
  };

  const initialErrors: Partial<FormData> = {};

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>(initialErrors);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetErrors = () => {
    setErrors(initialErrors);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Partial<FormData> = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Email is invalid";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:3001/signup",
          formData
        );
        console.log("Signup successful:", response.data);
        // Reset errors on successful signup
        resetErrors();
        // Reset form fields to initial state if needed
        setFormData(initialFormData);
      } catch (error) {
        console.error("Signup failed:", error);
      }
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        {errors.username && <span>{errors.username}</span>}
        <br />
        <input
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          onChange={handleInputChange}
        />
        {errors.emailAddress && <span>{errors.emailAddress}</span>}
        <br />
        <input
          type="number"
          name="securityPin"
          placeholder="Security Pin"
          onChange={handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        {errors.password && <span>{errors.password}</span>}
        <br />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
