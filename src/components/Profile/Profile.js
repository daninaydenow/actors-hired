import { useState, useEffect } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import * as userService from '../../services/userService';
import * as actorService from '../../services/actorService';

import MissingData from './MissingData';
import ProfileListItem from './ProfileListItem';

import styles from './Profile.module.css';

export const Profile = () => {
    const [myHirings, setMyHirings] = useState([]);
    const [allPortFolios, setAllPortFolios] = useState([]);
    const [myPortfolios, setMyPortfolios] = useState([]);

    const { currentUser } = useAuth();

    useEffect(() => {
        userService.getUserHirings(currentUser.uid)
            .then((snapshot) => {
                setMyHirings(snapshot.data().hired);
            });

        actorService.getAll()
            .then(snapshot => {
                setAllPortFolios(snapshot.docs.map((doc) => ({ ...doc.data(), _id: doc.id })))
            })

    }, [])

    const populatedHirings = [];
    myHirings.forEach((id) => {
        allPortFolios.forEach(portfolio => {
            if (id === portfolio._id) {
                const actorInfo = { name: portfolio.name, actorId: portfolio._id };
                populatedHirings.push(actorInfo);
            }
        })
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
                    {populatedHirings.length > 0
                        ? populatedHirings.map((x) => <ProfileListItem key={x.id} {...x} />)
                        : <MissingData {...hirings} />}
                </ul>
            </div>
        </>
    )
}

export default Profile;
