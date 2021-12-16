
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import { validate } from '../../helpers/formValidator';
import * as userService from '../../services/userService';
import styles from './Register.module.css';

const initialValues = { email: '', password: '', rePassword: '' };

const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            register(formValues.email, formValues.password)
            .then(() => {
                const user = JSON.parse(localStorage.getItem('user'));
                userService.createEmptyHiring(user.uid)
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(error => {
                if(error.code === 'auth/email-already-in-use') {
                    setFormErrors({...formErrors, email: "A user with the same email already exists!"})
                }
                
            })
        }
       }, [formErrors, isSubmit, formValues, navigate, register])

    const registerHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }


    return (
        <section id="register-page" className={styles.form}>
            <form className="card-body" method="POST" onSubmit={registerHandler}>
                <div className={styles.container}>
                    <legend>Register</legend>
                    <div className={`${styles.row} + mb-3 row`}>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
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
                        <p className='mt-2 text-danger'>{formErrors.email}</p>
                    </div>
                    <div className={`${styles.row} + mb-3 row`}>
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
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
                        <p className='mt-2 text-danger'>{formErrors.password}</p>
                    </div>
                    <div className={`${styles.row} + mb-3 row`}>
                        <label htmlFor="inputRepeatPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="rePassword"
                                name="rePassword"
                                value={formValues.rePassword}
                                onChange={onChangeHandler}
                                />
                        </div>
                        <p className='text-danger'>{formErrors.rePassword}</p>
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