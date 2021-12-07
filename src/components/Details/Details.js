import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as actorService from '../../services/actorService';
import styles from './Details.module.css';

const Details = () => {

    const [actor, setActor] = useState({});
    const {actorId} = useParams();

    useEffect(() => {
            
            actorService.getOne(actorId)
            .then(res => {
                
                setActor(res);
            });
        
    }, [actorId]);

    console.log(actor)
    
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
                            <div className={`${styles.box} text-center`}>
                            <Link to="/home" className={`btn btn-warning mt-5`}>Hire Actor!</Link>
                            </div>
                            <div className={`${styles.boxtwo} text-center`}>
                                 <Link to={`${actorId}/edit`} className={'btn btn-warning mt-5 me-2'}>Edit</Link>
                                 <button className={'btn btn-danger mt-5 me-2'}>Delete</button>
                            </div>
                            <div className={`${styles.boxthree} text-center`}>
                                  <button className={'btn btn-primary mt-5'}>Like</button>
                                  <div className={'btn btn-primary mt-5'}>Likes: </div>
                                  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Details;
