import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { validate } from "../../helpers/formValidator";

import styles from "./Login.module.css";

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
          // if (error.code === "auth/wrong-password") {
          //   setFormErrors({ ...formErrors, password: "Incorrect Password!" });
          // }
          // if (error.code === "auth/user-not-found") {
          //   setFormErrors({ ...formErrors, email: "Incorrect Email!" });
          // }
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
      <section className={styles.form}>
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
      </section>
    </>
  );
};

export default Login;
