
import { useState, useEffect } from 'react';
import MissingData from './MissingData';
import styles from './Profile.module.css';

import ProfileListItem from './ProfileListItem';

export const Profile = () => {
    const [myHirings, setMyHirings] = useState([]);
    const [myPortfolios, setMyPortfolios] = useState([]);

    useEffect(() => {

    })


    const profile = {
        alert: "You don't have any portfolios yet!",
        action: "Create a new portfolio today!",
        buttonName: "Create",
        path: "/create"
    }

    const hirings = {
        alert: "You have no hirings yet!",
        action: "Find the best actor for your performance!",
        buttonName: "Hire Now",
        path: "/create"
    }

    return (
        <>
            <h1 className={styles.heading}>My Profile</h1>
            <div className={`${styles.boxOne} card`}>
                <h1 className='h1 text-white p-2 '>My Portfolios</h1>
                <ul className='p-2'>
                    {myPortfolios.length > 0
                        ? myPortfolios.map((x) => <ProfileListItem key={x._id} {...x} />)
                        : <MissingData {...profile} />
                    }
                </ul>
            </div>
            <div className={`${styles.boxTwo} card`}>
                <h1 className='h1 text-white p-2'>My Hirings</h1>
                <ul className="container-fluid p-2">
                    {myHirings.length > 0
                        ? myHirings.map((x) => <ProfileListItem key={x._id} {...x} />)
                        : <MissingData {...hirings} />}
                </ul>
            </div>
        </>
    )
}

export default Profile;
