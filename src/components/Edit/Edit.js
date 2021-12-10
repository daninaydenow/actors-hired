import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import * as actorService from '../../services/actorService';
import {  useAuth } from "../../contexts/AuthContext";
import styles from './Edit.module.css'
const Edit = () => {
    const navigate = useNavigate();
    const [actor, setActor] = useState({});
    const { actorId } = useParams();
    const { currentUser } = useAuth();

    useEffect(() => {
        actorService.getOne(actorId)
        .then(snapshot => {
            setActor(snapshot.data());
        });
    }, [actorId]);

    const editPortfolioHandler = (e) => {
        e.preventDefault();
        let { profImgUrl, name, genre, imgOneUrl, imgTwoUrl, imgThreeUrl, experience } = Object.fromEntries(new FormData(e.currentTarget));
        // actorService.update(currentUser, actorId, { profImgUrl, name, genre, imgOneUrl, imgTwoUrl, imgThreeUrl, experience })
        //     .then(res => {
        //         navigate(`/details/${actorId}`);
        //     });
    }

    return (
        <form id="edit-form" method="POST" onSubmit={editPortfolioHandler}>
            <div className={`card  ${styles.style}`}>
                <div className="row h-100 text-start">
                    <div className={`col-3 ps-3 pe-3`}>
                        <div className={`h-100`}>
                            <div className={` ${styles.border} ${styles.imgsize} text-center mb-2`}>
                                <h2 className="mb-5">Edit Portfolio</h2>
                                <label htmlFor="profImgUrl" className="mt-4"> Profile Image Url</label>
                                <input type="text" name="profImgUrl" className="form-control" defaultValue={actor.profImgUrl} />
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="name" className="ps-2 pe-4 mt-1">Name</label>
                                <input type="text" name="name" className="form-control" defaultValue={actor.name} />
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="genre" className="ps-2 pe-4 mt-1">Genre</label>
                                <input type="text" name="genre" className="form-control" defaultValue={actor.genre} />
                            </div>
                        </div>
                    </div>
                    <div className={`col-9 pe-3`}>
                        <div className={`h-100`}>
                            <div className={` ${styles.border}  ps-2 pt-2 h-50 mb-2`}>
                                <div className={`${styles.imgUrl}`}>
                                    <label htmlFor="imgOneUrl">Image 1 Url</label>
                                    <input type="text" name="imgOneUrl" className="form-control" defaultValue={actor.imgOneUrl} />
                                </div>
                                <div className={`${styles.imgUrl} mt-3`}>
                                    <label htmlFor="imgTwoUrl">Image 2 Url</label>
                                    <input type="text" name="imgTwoUrl" className="form-control" defaultValue={actor.imgTwoUrl} />
                                </div>
                                <div className={`${styles.imgUrl} mt-3`}>
                                    <label htmlFor="imgThreeUrl">Image 3 Url</label>
                                    <input type="text" name="imgThreeUrl" className="form-control" defaultValue={actor.imgThreeUrl} />
                                </div>
                            </div>
                            <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                                <h4>Experience:</h4>
                                <textarea className="form-control" rows="5" name="experience" defaultValue={actor.experience} />
                            </div>
                            <div className="text-center">
                                <button className={'btn btn-warning mt-5'}>Edit Portfolio</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </form>
    )
}

export default Edit;