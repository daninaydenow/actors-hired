import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
    return (
        <section id="register-page" className={styles.form}>
            <form className="card-body" method="POST">
                <div className={styles.container}>
                    <legend>Register</legend>
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
                    <div className={`${styles.row} + mb-3 row`}>
                        <label htmlFor="inputRepeatPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="rePassword" name="rePassword" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-danger">Register</button>
                    </div>
                    <div className={`${styles.row} mb-3 row`}>
                        <p className={styles.row}>Already have an account ?</p>
                    <div >
                        <Link to="/login" className={styles.row}>Sign in!</Link>
                    </div>
                </div>
                </div>
            </form>
        </section>
    )
}

export default Register;