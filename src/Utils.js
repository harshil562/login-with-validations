export const validateEmail = (email) => {
  const emailValidationRegex = /\S+@\S+\.\S+/;
  let emailError = ''
  if (email === '') {
    emailError = 'This is a required field'
  } else if (!emailValidationRegex.test(email)) {
    emailError = 'Should be a valid email'
  } else if (email.length <= 5) {
    emailError = 'Should me more than 5 characters long'
  }
  return emailError;
}

export const validatePassword = (password) => {
  const passwordValidationRegex = /^(?=.*[A-Z]).*$/
  let passwordError = '';
  if (password === '') {
    passwordError = 'This is a required field'
  } else if (password.length <= 6) {
    passwordError = 'Min 6 characters'
  } else if (!passwordValidationRegex.test(password)) {
    passwordError = 'Should contain 1 uppercase letter'
  }
  return passwordError;
}