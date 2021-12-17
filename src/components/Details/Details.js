import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import {loadSpinner} from '../../helpers/loadSpinner';

import * as userService from '../../services/userService';
import * as actorService from '../../services/actorService';
import styles from './Details.module.css';

const Details = () => {
    const navigate = useNavigate();
    const [actor, setActor] = useState({});
    const [likes, setLikes] = useState([]);
    const [userHirings, setUserHirings] = useState([]);
    const [alreadyHired, setAlreadyHired] = useState(false);
    const [loading, setLoading] = useState(true);

    const { currentUser } = useAuth();
    const { actorId } = useParams();

    useEffect(() => {
        setTimeout(() => {
            actorService.getOne(actorId)
            .then(snapshot => {
                setActor(snapshot.data());
                setLikes(snapshot.data().likes);
            });


        if (currentUser) {
            userService.getUserHirings(currentUser.uid)
                .then((snapshot) => {
                    setUserHirings(snapshot.data().hired);
                });
        }
        setLoading(false);
        }, 1500)

    }, [actorId, currentUser]);



    const deletePortfolioHandler = (e) => {
        actorService.remove(actorId)
            .then(() => {
                navigate('/portfolios');
            })
    }

    const likePortfolioHandler = () => {
        const addedLikes = likes.slice();
        addedLikes.push(currentUser.uid);
        actorService.update(actorId, { likes: addedLikes })
            .then(() => {
                setLikes(addedLikes);
            })
    }

    const hireActorHandler = () => {
        const hiredNewActor = userHirings.slice();
        hiredNewActor.push(actorId);
        actorService.hire(currentUser.uid, hiredNewActor)
            .then(() => {
                setAlreadyHired(true);
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
                {alreadyHired
                    ? ""
                    : userHirings.includes(actorId)
                        ? ""
                        : <button className={`btn btn-warning mt-5`} onClick={hireActorHandler}>Hire Actor!</button>}

            </div>
            <div className={`${styles.boxthree} d-flex justify-content-center align-items-center text-center`}>
                {
                    likes.includes(currentUser?.uid)
                        ? ""
                        : <button className={'btn btn-primary mt-4 me-5'} onClick={likePortfolioHandler}>Like</button>
                }
                <p className={'mt-5'} >Likes: {likes?.length} </p>
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
                            {loading && loadSpinner}
                            {currentUser && !loading
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
