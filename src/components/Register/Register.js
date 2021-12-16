
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

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
       }, [formErrors, isSubmit])

    const registerHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
           errors.email = "This is not a valid email adress!"
        }
        if(!values.password) {
            errors.password = "Password is required!"
        } else if (values.password.length < 6) {
            errors.password = "Password cannot be less than 6 characters!"
        }
        if(!values.rePassword) {
            errors.rePassword = "Password confirmation is required!"
        } else if (values.password !== values.rePassword) {
            errors.rePassword = "Passwords don't match!"
        }

        return errors;
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