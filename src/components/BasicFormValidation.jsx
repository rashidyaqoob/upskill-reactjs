import React, { useState } from "react";

const BasicFormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    console.log(Object.keys(validationErrors));
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
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        required
        id="email"
        value={email}
        placeholder="Enter you email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        required
        id="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && (
        <ul style={{ color: "red" }}>
          {errors.password.split("\n").map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default BasicFormValidation;
