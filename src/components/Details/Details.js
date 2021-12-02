import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';
const Details = ({

}) => {
    return (

        <div className={`card  ${styles.style}`}>
            <div className="row h-100 text-start">
                <div className={`col-3 ps-3 pe-3`}>
                    <div className={`h-100`}>
                        <div className={` ${styles.border} ${styles.imgsize} text-center mb-2`}>
                            <img src="veselin-kalanovski-profile.jpg" alt="img" className="img-fluid h-100" />
                        </div>
                        <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                            <h5>Actors name:</h5>
                            <p>Veselin Kalanovski</p>
                        </div>
                        <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                            <h5>Genre:</h5>
                            <p>Drama, Comedy, Horror, Thriller</p>
                        </div>
                    </div>
                </div>
                <div className={`col-9 pe-3`}>
                    <div className={`h-100`}>
                        <div className={` ${styles.border} ps-2 pt-2 h-50 mb-2 text-center`}>
                            <div className={styles.imgboxone}>
                                  <img src="veselin-kalanovski-main.jpg" alt="img" className={`${styles.border} img-fluid h-100`} />
                            </div>
                            <div className={styles.imgboxtwo}>
                            <img src="veseiln-kalanovski-second.jpg" alt="img" className="img-fluid h-100" />
                            </div>
                            <div className={styles.imgboxthree}>
                            <img src="veselin-kalanovski-scene.jpg" alt="img" className="img-fluid h-100" />
                            </div>
                        </div>
                        <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                            <h4>Experience:</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quis provident. Necessitatibus dignissimos iste vero voluptatum dolore consectetur aliquam quaerat placeat labore eum blanditiis, voluptates odit sequi, voluptatem eius natus?</p>
                        </div>
                        <div>
                            <div className={`${styles.box} text-center`}>
                            <Link to="/home" className={`btn btn-warning mt-5`}>Hire Actor!</Link>
                            </div>
                            <div className={`${styles.boxtwo} text-center`}>
                                 <Link to="/edit" className={'btn btn-warning mt-5 me-2'}>Edit</Link>
                                 <button className={'btn btn-danger mt-5 me-2'}>Delete</button>
                            </div>
                            <div className={`${styles.boxthree} text-center`}>
                                  <button className={'btn btn-primary mt-5'}>Like</button>
                                  <span className={'ms-3 '}>Likes: 0</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Details;

{/* <img src="actor-one.jpg" className={`${styles.imgsize} card-img-top`} alt="..." />
                <div className="card-body">
                    <h5 className={`${styles.flex} card-title`}><strong>Name:</strong> Ashley Cooper</h5>
                    <p className=""><strong>Personal quote:</strong> "Live you're best as if you'd die tommorow"</p>


                    <div id="button-wrap" className={`${styles.flex}`}>
                        <div>
                            <a href="#" className={`${styles.btnspacing} btn btn-warning`}>Hire</a>
                        </div>
                        <div>
                            <a href="#" className={`${styles.btnspacing} btn btn-primary`}>Edit</a>
                        </div>
                        <div>
                            <a href="#" className={`${styles.btnspacing} btn btn-danger`}>Delete</a>
                        </div>
                    </div>


                </div> */}