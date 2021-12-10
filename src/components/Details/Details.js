import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {  useAuth } from '../../contexts/AuthContext';
import * as actorService from '../../services/actorService';
import styles from './Details.module.css';

const Details = () => {
    const navigate = useNavigate();
    const [actor, setActor] = useState({});
    const [loading, setLoading] = useState(false);

    const { currentUser } = useAuth();
    const { actorId } = useParams();

    useEffect(() => {
        actorService.getOne(actorId)
            .then(snapshot => {
                setActor(snapshot.data());
            });

    }, [actorId]);

    const deletePortfolioHandler = (e) => {
        actorService.remove(actorId)
        .then(() => {
             navigate('/portfolios');
        })
    }

    
    const ownerButtons = (
        <div className={`${styles.boxtwo} text-center`}>
            <Link to={`/edit/${actorId}`} className={'btn btn-warning mt-5 me-2'}>Edit</Link>
            <button className={'btn btn-danger mt-5 me-2'} onClick={deletePortfolioHandler}>Delete</button>
        </div>
    )

    const userButtons = (
        <>
            <div className={`${styles.box} text-center`}>
                <Link to="/home" className={`btn btn-warning mt-5`}>Hire Actor!</Link>
            </div>
            <div className={`${styles.boxthree} text-center`}>
                <button className={'btn btn-primary mt-5'}>Like</button>
                <div className={'btn btn-primary mt-5'}>Likes: </div>
            </div>
        </>
    )

    return (

        <div className={`card  ${styles.style}`}>
            <div className="row h-100 text-start">
                <div className={`col-3 ps-3 pe-3`}>
                    <div className={`h-100`}>
                        <div className={` ${styles.border} ${styles.imgsize} text-center mb-2`}>
                            <img src={actor.profImgUrl} alt="img" className="img-fluid h-100" />
                        </div>
                        <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                            <h5>Actors name: </h5>
                            <p>{actor.name}</p>
                        </div>
                        <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                            <h5>Genre:</h5>
                            <p>{actor.genre}</p>
                        </div>
                    </div>
                </div>
                <div className={`col-9 pe-3`}>
                    <div className={`h-100`}>
                        <div className={` ${styles.border} ps-2 pt-2 h-50 mb-2 text-center`}>
                            <div className={styles.imgboxone}>
                                <img src={actor.imgOneUrl} alt="img" className={`${styles.border} img-fluid h-100`} />
                            </div>
                            <div className={styles.imgboxtwo}>
                                <img src={actor.imgTwoUrl} alt="img" className="img-fluid h-100" />
                            </div>
                            <div className={styles.imgboxthree}>
                                <img src={actor.imgThreeUrl} alt="img" className="img-fluid h-100" />
                            </div>
                        </div>
                        <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                            <h4>Experience:</h4>
                            <p>{actor.experience}</p>
                        </div>
                        <div>

                            {currentUser
                                ? currentUser.uid === actor._ownerId
                                    ? ownerButtons
                                    : userButtons
                                : ''}

                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Details;
