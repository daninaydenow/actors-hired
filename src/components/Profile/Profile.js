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

    const populatedMyHirings = [];
    myHirings.forEach((id) => {
        allPortFolios.forEach(portfolio => {
            if (id === portfolio._id) {
                const actorInfo = { name: portfolio.name, _id: portfolio._id };
                populatedMyHirings.push(actorInfo);
            }
        })
    });
   
    const populatedMyPortfolios = allPortFolios.filter((x) => x._ownerId == currentUser.uid);
    console.log(populatedMyPortfolios);

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
        path: "/portfolios"
    }

    return (
        <>
            <h1 className={styles.heading}>My Profile</h1>
            <div className={`${styles.boxOne} card`}>
                <h1 className='h1 text-white p-2 '>My Portfolios</h1>
                <ul className='p-2'>
                    {populatedMyPortfolios.length > 0
                        ? populatedMyPortfolios.map((x) => <ProfileListItem key={x._id} {...x} />)
                        : <MissingData {...profile} />
                    }
                </ul>
            </div>
            <div className={`${styles.boxTwo} card`}>
                <h1 className='h1 text-white p-2'>My Hirings</h1>
                <ul className="container-fluid p-2">
                    {populatedMyHirings.length > 0
                        ? populatedMyHirings.map((x) => <ProfileListItem key={x._id} {...x} />)
                        : <MissingData {...hirings} />}
                </ul>
            </div>
        </>
    )
}

export default Profile;
