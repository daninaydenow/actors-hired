import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { validate } from "../../helpers/formValidator";

import "./Login.css";

const initialFormValues = { email: "", password: "" };

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      login(formValues.email, formValues.password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          setFormErrors({
            ...formErrors,
            password: "Incorrect username or password!",
          });
        });
    }
  }, [formErrors, isSubmit, formValues, login, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <form className="login-form" method="POST" onSubmit={loginHandler}>
        <div className="form-heading">
          <h1>Login</h1>
        </div>
        <section className="credentials-section">
          <div className="inputs-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={onChangeHandler}
            />
            <p className="error">{formErrors.email}</p>
          </div>
          <div className="inputs-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={onChangeHandler}
            />
            <p className="error">{formErrors.password}</p>
          </div>
        </section>
        <section>
          <div className="login-actions">
            <button type="submit" className="btn login">
              <i className="fas fa-sign-in-alt"></i>
              <span className="hide"> Login</span>
            </button>
            <div className="question">
              <small>Don't have an account ?</small>
            </div>
            <Link to="/register" className="btn register">
              <i className="fas fa-user-plus"></i>
              <span className="hide"> Register</span>
            </Link>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
