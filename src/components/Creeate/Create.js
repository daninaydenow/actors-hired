import { useNavigate } from 'react-router';
import {  useAuth } from '../../contexts/AuthContext';
import * as actorService from '../../services/actorService';
import styles from './Create.module.css'
const Create = () => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    
    const createPortfolioHandler = (e) => {
        e.preventDefault();
        const {profImgUrl, name, genre, imgOneUrl, imgTwoUrl, imgThreeUrl, experience} = Object.fromEntries(new FormData(e.currentTarget));
        // TODO: validate fields
        actorService.create({profImgUrl, name, genre, imgOneUrl, imgTwoUrl, imgThreeUrl, experience, likes:[], _ownerId: currentUser.uid })
        .then(res => {
           console.log(res);
           navigate('/portfolios');
        })
    }

    return (
        <form method="POST" onSubmit={createPortfolioHandler}>
            <div className={`card  ${styles.style}`}>
                <div className="row h-100 text-start">
                    <div className={`col-3 ps-3 pe-3`}>
                        <div className={`h-100`}>
                            <div className={` ${styles.border} ${styles.imgsize} text-center mb-2`}>
                                <h2 className="mb-5">Create Portfolio</h2>
                                <label htmlFor="profImgUrl" className="mt-4"> Profile Image Url</label>
                                <input type="text" name="profImgUrl" className="form-control" placeholder="Enter the url of Your profile Image" />
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="name" className="ps-2 pe-4 mt-1">Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter your full name" />
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="genre" className="ps-2 pe-4 mt-1">Genre</label>
                                <input type="text" name="genre" className="form-control" placeholder="Enter all specific genres You act in" />
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
                                    <input type="text" name="imgThreeUrl" className="form-control" placeholder="Enter the url of Your portfolio Image"/>
                                </div>
                            </div>
                            <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                                <h4>Experience:</h4>
                                <textarea className="form-control" rows="5" name="experience" placeholder="Enter Your previous theater and cinema experience"></textarea>
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