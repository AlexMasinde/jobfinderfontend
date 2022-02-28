import validator from "validator";

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

///validate job information modal
export function validateJobInformationModal(title, description, link) {
  const jobInformationModalErrors = {};

  if (title.trim() === "") {
    jobInformationModalErrors.title = "Title is required";
  } else if (!/^[a-zA-Z ]+$/.test(title)) {
    jobInformationModalErrors.title = "Title must be letters and spaces only";
  }

  if (description.trim() === "") {
    jobInformationModalErrors.description = "Description is required";
  } else if (!/^[a-zA-Z ]+$/.test(description)) {
    jobInformationModalErrors.description =
      "Description must be letters and spaces only";
  }

  //ensure link is not empty and it is valid
  if (link.trim() === "") {
    jobInformationModalErrors.link = "Link is required";
  } else if (!validator.isURL(link, { require_protocol: true })) {
    jobInformationModalErrors.link = "Please provide a valid link";
  }

  return {
    valid: Object.keys(jobInformationModalErrors).length === 0,
    jobInformationModalErrors: jobInformationModalErrors,
  };
}

export function validateSubscriptionInformation(category, email) {
  const subscriptionInformationErrors = {};
  if (validator.isEmpty(category)) {
    subscriptionInformationErrors.category = "Please select a category";
  }

  if (validator.isEmpty(email)) {
    subscriptionInformationErrors.email = "Please provide an email";
  } else if (!validator.isEmail(email)) {
    subscriptionInformationErrors.email = "Email is invalid";
  }

  return {
    valid: Object.keys(subscriptionInformationErrors).length === 0,
    subscriptionInformationErrors: subscriptionInformationErrors,
  };
}

export function validateChangePassword(
  currentPassword,
  newPassword,
  confirmPassword
) {
  const changePasswordErrors = {};

  if (validator.isEmpty(currentPassword)) {
    changePasswordErrors.currentPassword = "Current password is required";
  }

  if (validator.isEmpty(newPassword)) {
    changePasswordErrors.newPassword = "New password is required";
  } else if (newPassword.length < 6) {
    changePasswordErrors.newPassword =
      "New password must be at least 6 characters";
  }

  if (validator.isEmpty(confirmPassword)) {
    changePasswordErrors.confirmPassword = "Confirm password is required";
  } else if (newPassword !== confirmPassword) {
    changePasswordErrors.confirmPassword = "Passwords must match";
  }

  return {
    valid: Object.keys(changePasswordErrors).length === 0,
    changePasswordErrors: changePasswordErrors,
  };
}
