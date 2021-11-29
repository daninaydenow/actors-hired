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
                            <img src="actor-three.jpg" alt="kurec goshevski" className="img-fluid h-100" />
                        </div>
                        <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                            <h5>Actors name</h5>
                        </div>
                        <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                            <h5>Genre</h5>
                        </div>
                        <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                            <h5>quick description</h5>
                        </div>
                    </div>
                </div>
                <div className={`col-9 pe-3`}>
                    <div className={`h-100`}>
                        <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                            <h4>Theater Experience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam, consectetur dicta sequi minima rem quis architecto temporibus quaerat, maxime molestiae! Quaerat accusantium voluptas dolorem maxime corporis quibusdam, eveniet excepturi.</p>
                        </div>
                        <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                            <h4>Cinema Experience</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quis provident. Necessitatibus dignissimos iste vero voluptatum dolore consectetur aliquam quaerat placeat labore eum blanditiis, voluptates odit sequi, voluptatem eius natus?</p>
                        </div>
                        <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                            <h4>Full description</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt animi velit exercitationem voluptatem a doloremque enim, libero, veniam illum quos maiores possimus quod quo commodi culpa aliquid, eius explicabo molestias!</p>
                        </div>
                        <div className={` text-center mt-5`}>
                            <Link to="/home" className={`btn btn-warning`}>Hire Actor!</Link>
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