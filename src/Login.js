import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setError] = useState({ emailError: '', passwordError: '' });
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });


  const submitForm = (e) => {
    e.preventDefault();
    const isValid = validateFormData();
    if (isValid) {
      setIsLoading(true);
      fetch('https://www.mocky.io/v2/5d9d9219310000153650e30b')
      .then(response => { 
        response.json();
        setIsLoading(false);
      });
    }
  }

  const validateFormData = () => {
    const emailValidationRegex = /\S+@\S+\.\S+/;
    const passwordValidationRegex = /^(?=.*[A-Z]).*$/
    let isFormValid = true;
    let passwordError = '', emailError = '';

    if (email === '') {
      emailError = 'This is a required field'
      isFormValid = false;
    }
    else if (!emailValidationRegex.test(email)) {
      emailError = 'Should be a valid email'
      isFormValid = false;
    }
    else if (email.length <= 5) {
      emailError = 'Length of email should be more than 5 characters'
      isFormValid = false;
    }

    if (password === '') {
      passwordError = 'This is a required field'
      isFormValid = false;
    }
    else if (password.length <= 6) {
      passwordError = 'Min 6 characters'
      isFormValid = false;
    }
    else if (!passwordValidationRegex.test(password)) {
      passwordError = 'Should contain 1 uppercase letter'
      isFormValid = false;
    }

    if (!isFormValid) {
      setError({
        emailError,
        passwordError
      });
      return false;
    } else {
      setError({
        emailError: '',
        passwordError: ''
      });
      return true;
    }
  }

  const { email, password } = formData;
  const { emailError, passwordError } = errors;
  return (
    <form onSubmit={submitForm}>
      <input
        id="email"
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email your email"
        name="email"
      />
      {emailError && <span id="emailError" style={{ color: "red" }}>{emailError}</span>}
      <input
        id="password"
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Enter your password"
        type="password"
        name="password"
      />
      {passwordError && <span id="passwordError" style={{ color: "red" }}>{passwordError}</span>}
      <button id="submit" className={isLoading ? 'spinner' : ''} type="submit">Login</button>
    </form>
  );
};

export default Login;
