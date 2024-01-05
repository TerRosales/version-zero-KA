import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import "../../global.css";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  username: string;
  emailAddress: string;
  securityPin: string;
  password: string;
  id: string;
  guardianship?: string;
  gradeLevel?: string;
}

interface PasswordErrors {
  lengthError?: any;
  lowercaseError?: string;
  uppercaseError?: string;
  numberError?: string;
  specialCharError?: string;
}

interface SignUpProps {
  guardianship?: string; // Making guardianship optional
  gradeLevel: string;
}

const SignUp: React.FC<SignUpProps> = ({ guardianship, gradeLevel }) => {
  const initialFormData: FormData = {
    username: "",
    emailAddress: "",
    securityPin: "",
    password: "",
    id: uuidv4(),
  };

  const initialErrors: Partial<FormData & { password?: PasswordErrors }> = {};
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] =
    useState<Partial<FormData & { password?: PasswordErrors }>>(initialErrors);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const resetErrors = () => {
    setErrors(initialErrors);
  };

  const validatePassword = (password: string): PasswordErrors => {
    const passwordErrors: PasswordErrors = {};

    if (password.trim().length < 8) {
      passwordErrors.lengthError =
        "Password must be at least 8 characters long";
    }

    if (!/(?=.*[a-z])/.test(password)) {
      passwordErrors.lowercaseError =
        "Password must contain at least one lowercase letter";
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      passwordErrors.uppercaseError =
        "Password must contain at least one uppercase letter";
    }

    if (!/(?=.*\d)/.test(password)) {
      passwordErrors.numberError = "Password must contain at least one number";
    }

    if (!/(?=.*[@$!%*?&])/.test(password)) {
      passwordErrors.specialCharError =
        "Password must contain at least one special character";
    }

    return passwordErrors;
  };

  const validateSecurityPin = (pin: string): string => {
    let pinNumber = pin.trim();
    if (!pinNumber) {
      return "Security Pin is required";
    }

    if (pinNumber.length < 6 || pinNumber.length > 8) {
      return "Security Pin must be 6-8 characters long";
    }

    const consecutiveDigitsRegex = /(\d)\1{5}/;

    if (consecutiveDigitsRegex.test(pinNumber)) {
      return "Security Pin cannot consist of six consecutive digits";
    }

    const consecutiveSequences = [
      "012345",
      "123456",
      "234567",
      "345678",
      "456789",
    ];

    for (const sequence of consecutiveSequences) {
      if (pin.includes(sequence)) {
        return "Security Pin cannot contain a specific consecutive sequence";
      }
    }

    if (!/^\d+$/.test(pinNumber)) {
      return "Security Pin must consist of digits only";
    }

    return "";
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Partial<FormData & { password?: PasswordErrors }> = {};

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

    const securityPinError = validateSecurityPin(formData.securityPin);
    if (securityPinError) {
      newErrors.securityPin = securityPinError;
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = { lengthError: "Password is required" };
      valid = false;
    } else {
      const passwordValidationErrors = validatePassword(formData.password);
      if (Object.keys(passwordValidationErrors).length > 0) {
        valid = false;
        newErrors.password = passwordValidationErrors;
      }
    }

    if (formData.password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        let dataToSend;
        if (guardianship) {
          dataToSend = { ...formData, guardianship };
        } else {
          dataToSend = { ...formData, gradeLevel };
        }
        const response = await axios.post(
          "http://localhost:3001/signup",
          dataToSend
        );
        console.log("Signup successful:", response.data);

        console.log("Before Reset - formData:", formData);
        resetErrors();
        setFormData(initialFormData);
        console.log("After Reset - formData:", formData);
      } catch (error) {
        console.error("Signup failed:", error);
      }
    }
  };

  return (
    <div className="app__signup-container">
      <div className="app__signup-form_container">
        <form className="app__signup-form">
          <label htmlFor="username">Username: </label>
          <br />
          <input
            className="app__signup-form_input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
          <br />
          {errors.username && (
            <span className="app__form-error">{errors.username}</span>
          )}
          <br />
          <label htmlFor="emailAddress">Email Address: </label>
          <br />
          <input
            className="app__signup-form_input"
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            onChange={handleInputChange}
          />
          <br />
          {errors.emailAddress && (
            <span className="app__form-error">{errors.emailAddress}</span>
          )}
          <br />
          <label htmlFor="securityPin">Security Pin: </label>
          <br />
          <input
            className="app__signup-form_input"
            type="string"
            name="securityPin"
            placeholder="Security Pin"
            onChange={handleInputChange}
          />
          <br />
          {errors.securityPin && (
            <span className="app__form-error">{errors.securityPin}</span>
          )}
          <br />
          <label htmlFor="password">Password: </label>
          <br />
          <input
            className="app__signup-form_input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <br />
          {errors.password && (
            <div className="app__form-errorSet">
              {errors.password.lengthError && (
                <span className="app__signup-error">
                  {errors.password.lengthError}
                </span>
              )}
              {errors.password.lowercaseError && (
                <span className="app__signup-error">
                  {errors.password.lowercaseError}
                </span>
              )}
              {errors.password.uppercaseError && (
                <span className="app__signup-error">
                  {errors.password.uppercaseError}
                </span>
              )}
              {errors.password.numberError && (
                <span className="app__signup-error">
                  {errors.password.numberError}
                </span>
              )}
              {errors.password.specialCharError && (
                <span className="app__signup-error">
                  {errors.password.specialCharError}
                </span>
              )}
            </div>
          )}
          <br />
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <br />
          <input
            className="app__signup-form_input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
          <br />
          {errors.password && (
            <div className="app__form-errorSet">
              {errors.confirmPassword && (
                <span className="app__form-error">
                  {errors.confirmPassword}
                </span>
              )}
              {errors.password.lengthError && (
                <span className="app__signup-error">
                  {errors.password.lengthError}
                </span>
              )}
              {errors.password.lowercaseError && (
                <span className="app__signup-error">
                  {errors.password.lowercaseError}
                </span>
              )}
              {errors.password.uppercaseError && (
                <span className="app__signup-error">
                  {errors.password.uppercaseError}
                </span>
              )}
              {errors.password.numberError && (
                <span className="app__signup-error">
                  {errors.password.numberError}
                </span>
              )}
              {errors.password.specialCharError && (
                <span className="app__signup-error">
                  {errors.password.specialCharError}
                </span>
              )}
            </div>
          )}
          <button
            className="custom__button"
            type="button"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
