import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

import * as actorService from '../../services/actorService';
import {validate} from '../../helpers/formValidator';
import styles from './Create.module.css'

const initialFormValues = {
    profImgUrl: '',
    name: '',
    genre: '',
    imgOneUrl: '',
    imgTwoUrl: '',
    imgThreeUrl: '',
    experience: '',
}

const Create = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            actorService.create({...formValues, likes:[], _ownerId: currentUser.uid })
            .then(res => {
               navigate('/portfolios');
            })
        }
        
    }, [formErrors, isSubmit]);

    const createPortfolioHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const onChangeHandler = (e) => {
        console.log(formValues);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    // const validate = (values) => {
    //     const errors = {};
    //     if (!values.profImgUrl) {
    //         errors.profImgUrl = "Profile image URL is required!"
    //     } else if (!values.profImgUrl.startsWith('https://')) {
    //         errors.profImgUrl = "Valid Image URL required!"
    //     }
    //     if (!values.name) {
    //         errors.name = "Name is required!"
    //     } else if (values.name.length < 6) {
    //         errors.name = "Name cannot be shorter than 6 characters!"
    //     }
    //     if (!values.genre) {
    //         errors.genre = "Genre is required!"
    //     }
    //     if (!values.experience) {
    //         errors.experience = "Experience is required!"
    //     } else if (values.experience.length < 10) {
    //         errors.experience = "Experience field must contain more than 10 characters!"
    //     }
    //     return errors;
    // }

    return (
        <form method="POST" onSubmit={createPortfolioHandler}>
            <div className={`card  ${styles.style}`}>
                <div className="row h-100 text-start">
                    <div className={`col-3 ps-3 pe-3`}>
                        <div className={`h-100`}>
                            <div className={` ${styles.border} ${styles.imgsize} text-center mb-2`}>
                                <h2 className="mb-5">Create Portfolio</h2>
                                <label htmlFor="profImgUrl" className="mt-4"> Profile Image Url <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    name="profImgUrl"
                                    className="form-control"
                                    placeholder="Enter the url of Your profile Image"
                                    value={formValues.profImgUrl}
                                    onChange={onChangeHandler}
                                />
                                <span className='text-danger'>{formErrors.profImgUrl}</span>
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="name" className="ps-2 pe-4 mt-1">Name <span className='text-danger'>*</span></label>
                                <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                placeholder="Enter your full name" 
                                value={formValues.name}
                                onChange={onChangeHandler}
                                />
                                <span className='text-danger'>{formErrors.name}</span>
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="genre" className="ps-2 pe-4 mt-1">Genre <span className='text-danger'>*</span></label>
                                <input 
                                type="text" 
                                name="genre" 
                                className="form-control" 
                                placeholder="Enter all specific genres You act in" 
                                value={formValues.genre}
                                onChange={onChangeHandler}
                                />
                                <span className='text-danger'>{formErrors.genre}</span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-9 pe-3`}>
                        <div className={`h-100`}>
                            <div className={` ${styles.border}  ps-2 pt-2 h-50 mb-2`}>
                                <div className={`${styles.imgUrl}`}>
                                    <label htmlFor="imgOneUrl">Image 1 Url</label>
                                    <input type="text" name="imgOneUrl" className="form-control" placeholder="Enter the url of Your portfolio Image" />
                                </div>
                                <div className={`${styles.imgUrl} mt-3`}>
                                    <label htmlFor="imgTwoUrl">Image 2 Url</label>
                                    <input type="text" name="imgTwoUrl" className="form-control" placeholder="Enter the url of Your portfolio Image" />
                                </div>
                                <div className={`${styles.imgUrl} mt-3`}>
                                    <label htmlFor="imgThreeUrl">Image 3 Url</label>
                                    <input type="text" name="imgThreeUrl" className="form-control" placeholder="Enter the url of Your portfolio Image" />
                                </div>
                            </div>
                            <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                                <h4>Experience: <span className='text-danger'>*</span></h4>
                                <textarea 
                                className="form-control" 
                                rows="5" name="experience" 
                                placeholder="Enter Your previous theater and cinema experience" 
                                value={formValues.experience}
                                onChange={onChangeHandler}
                                />
                                <span className='text-danger'>{formErrors.experience}</span>
                            </div>
                            <div className="text-center">
                                <button className={'btn btn-warning mt-5'}>Create Portfolio</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </form>
    )
}

export default Create;