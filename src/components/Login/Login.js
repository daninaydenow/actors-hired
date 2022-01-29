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
      <form class="login-form" method="POST" onSubmit={loginHandler}>
        <div class="form-heading">
          <h1>Login</h1>
        </div>
        <section class="credentials-section">
          <div class="inputs-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={onChangeHandler}
            />
          </div>
          <div class="inputs-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={onChangeHandler}
            />
          </div>
        </section>
        <section>
          <div class="actions">
            <button type="submit" className="btn login">
              <i class="fas fa-sign-in-alt"></i>
              <span class="hide">Login</span>
            </button>
            <div className="question">
              <small>Don't have an account ?</small>
            </div>
            <Link to="/register" className="btn register">
              <i class="fas fa-user-plus"></i>
              <span class="hide">Register</span>
            </Link>
          </div>
        </section>
      </form>
      {/* <section className={styles.form}>
        <form className="card-body" method="POST" onSubmit={loginHandler}>
          <div className={styles.container}>
            <legend>Login</legend>
            <div className={`${styles.row} + mb-3 row`}>
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="mt-2 text-danger">{formErrors.email}</span>
            </div>
            <div className={`${styles.row} + mb-3 row`}>
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="mt-2 text-danger">{formErrors.password}</span>
            </div>
            <div>
              <button type="submit" className="btn btn-warning padding">
                Login
              </button>
            </div>
            <div className={`${styles.row} mb-3 row`}>
              <p className={styles.row}>Don't have an account ?</p>
            </div>
            <div>
              <Link to="/register" className={styles.row}>
                Register!
              </Link>
            </div>
          </div>
        </form>
      </section>  */}
    </>
  );
};

export default Login;
