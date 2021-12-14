import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

const actorId = '';
export const Profile = () => {
    return (
        <>
            <h1 className={styles.heading}>My Profile</h1>
            <div className={`${styles.boxOne} card`}>
                <h1 className='h1 text-white p-2 '>My Portfolios</h1>
                <ul className='p-2'>
                    <li className="list-group-item">An item</li>
                </ul>
            </div>
            <div className={`${styles.boxTwo} card`}>
            <h1 className='h1 text-white p-2'>My Hirings</h1>
                <ul className="container-fluid p-2">
                    <li className="list-group-item">An item<Link to={`/details/${actorId}`} className="btn btn-warning ms-5">Details</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Profile;
