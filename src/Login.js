import React, { useState } from "react";
import { validateEmail, validatePassword } from './Utils';
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
    let isFormValid = true;
    let passwordError = '', emailError = '';

    /*Validating email */
    emailError = validateEmail(email);
    if(emailError !== ''){
      isFormValid = false;
    }

    /*Validating password */
    passwordError = validatePassword(password);
    if(passwordError !== ''){
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
