export const validate = (values) => {
  const errors = {};
  // validates register form fields
  if (values.hasOwnProperty("rePassword")) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email adress!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password cannot be less than 6 characters!";
    }
    if (!values.rePassword) {
      errors.rePassword = "Confirmation is required!";
    } else if (values.password !== values.rePassword) {
      errors.rePassword = "Passwords don't match!";
    }
  }
  // validates login form fields
  if (values.hasOwnProperty("password")) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    }
  }
  // validates create/edit forms fields
  if (values.hasOwnProperty("profImgUrl")) {
    if (!values.profImgUrl) {
      errors.profImgUrl = "Profile image URL is required!";
    } else if (!values.profImgUrl.startsWith("https://")) {
      errors.profImgUrl = "Valid Image URL required!";
    }
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length < 6) {
      errors.name = "Name cannot be shorter than 6 characters!";
    }
    if (!values.age) {
      errors.age = "Age is required!";
    } else if (values.age < 0) {
      errors.name = "Age cannot be less than 0!";
    }
    if (!values.genre) {
      errors.genre = "Genre is required!";
    }
    if (!values.experience) {
      errors.experience = "Experience is required!";
    } else if (values.experience.length < 10) {
      errors.experience =
        "Experience field must contain more than 10 characters!";
    }
  }
  return errors;
};
