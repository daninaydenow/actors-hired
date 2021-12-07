import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import * as authService from "../../services/authService";
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    authService.login(email, password)
      .then(userData => {
        login(userData);
        navigate('/');
      })
      .catch(err => {
        // TODO: show notification;
        console.log(err);
      })
  }

  return (
    <>
      <section className={styles.form}>
        <form className="card-body" method="POST" onSubmit={loginHandler}>
          <div className={styles.container}>
            <legend>Login</legend>
            <div className={`${styles.row} + mb-3 row`}>
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="email" name="email" />
              </div>
            </div>
            <div className={`${styles.row} + mb-3 row`}>
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" name="password" />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-warning padding">Login</button>
            </div>
            <div className={`${styles.row} mb-3 row`}>
              <p className={styles.row}>Don't have an account ?</p>
            </div>
            <div>
              <Link to="/register" className={styles.row}>Register!</Link>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login;