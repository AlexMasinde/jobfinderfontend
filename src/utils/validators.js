export function validateSignUp(email, password, userName) {
  const signUpErrors = {};

  if (userName.trim() === "") {
    signUpErrors.userName = "Username is required";
  } else if (!/^[a-zA-Z ]+$/.test(userName)) {
    signUpErrors.userName = "Username must be letters and spaces only";
  }

  validateEmail(email, signUpErrors);
  validatePassword(password, signUpErrors);

  return {
    valid: Object.keys(signUpErrors).length === 0,
    signUpErrors: signUpErrors,
  };
}

export function validateLogin(email, password) {
  const loginErrors = {};

  if (password.trim() === "") {
    loginErrors.password = "Password is required";
  } else if (password.length < 6) {
    loginErrors.password = "Password must be at least 6 characters";
  }

  validateEmail(email, loginErrors);

  return {
    valid: Object.keys(loginErrors).length === 0,
    loginErrors: loginErrors,
  };
}

function validateEmail(email, errorObject) {
  if (email.trim() === "") {
    errorObject.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errorObject.email = "Invalid email address";
  }
}

function validatePassword(password, errorObject) {
  if (password.trim() === "") {
    errorObject.password = "Password is required";
  } else if (password.length < 6) {
    errorObject.password = "Password must be at least 6 characters";
  }
}
