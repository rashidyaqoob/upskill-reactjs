import React, { useState } from "react";
import "./BasicFormValidation.css";

const BasicFormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Success");
      setEmail("");
      setPassword("");
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate Email field

    if (!email) {
      errors.email = "Email field cannot be empty";
    } else if (!email.endsWith("@webdevsimplified.com")) {
      errors.email = "Email must end with @webdevsimplified.com";
    }

    // Validate Password field

    if (!password) {
      errors.password = "Password is required";
    } else {
      if (password.length < 10) {
        errors.password = "Password must be 10 characters or longer";
      }
      if (!/[a-z]/.test(password)) {
        errors.password = "Password must include a lowercase letter";
      }
      if (!/[A-Z]/.test(password)) {
        errors.password = "Password must include an uppercase letter";
      }
      if (!/[0-9]/.test(password)) {
        errors.password = "Password must include a number";
      }
    }

    return errors;
  };
  return (
    <form onSubmit={handleSubmit} noValidate className="form-container">
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          required
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          required
          id="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        {errors.password && (
          <ul className="form-error">
            {errors.password.split("\n").map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </div>

      <input type="submit" value="Submit" className="form-submit" />
    </form>
  );
};

export default BasicFormValidation;
