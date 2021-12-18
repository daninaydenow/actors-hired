import { useState, useEffect } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import { loadSpinner } from '../../helpers/loadSpinner';
import * as userService from '../../services/userService';
import * as actorService from '../../services/actorService';

import MissingData from './MissingData';
import ProfileListItem from './ProfileListItem';

import styles from './Profile.module.css';

export const Profile = () => {
    const [myHirings, setMyHirings] = useState([]);
    const [allPortFolios, setAllPortFolios] = useState([]);
    const [loading, setLoading] = useState(true);

    const { currentUser } = useAuth();

    useEffect(() => {
        setTimeout(() => {
            userService.getUserHirings(currentUser.uid)
                .then((snapshot) => {
                    setMyHirings(snapshot.data().hired);
                });

            actorService.getAll()
                .then(snapshot => {
                    setAllPortFolios(snapshot.docs.map((doc) => ({ ...doc.data(), _id: doc.id })))
                })

            setLoading(false);
        }, 1500)


    }, [currentUser])

    const populatedMyHirings = [];
    myHirings.forEach((id) => {
        allPortFolios.forEach(portfolio => {
            if (id === portfolio._id) {
                const actorInfo = { name: portfolio.name, _id: portfolio._id };
                populatedMyHirings.push(actorInfo);
            }
        })
    });

    const populatedMyPortfolios = allPortFolios.filter((x) => x._ownerId === currentUser.uid);

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
                    {loading && loadSpinner}
                    {populatedMyPortfolios || loading
                        ? populatedMyPortfolios.map((x) => <ProfileListItem key={x._id} {...x} />)
                        : <MissingData {...profile} />
                    }
                </ul>
            </div>
            <div className={`${styles.boxTwo} card`}>
                <h1 className='h1 text-white p-2'>My Hirings</h1>
                <ul className="container-fluid p-2">
                    {loading && loadSpinner}
                    {populatedMyHirings || loading
                        ? populatedMyHirings.map((x) => <ProfileListItem key={x._id} {...x} />)
                        : <MissingData {...hirings} />}
                </ul>
            </div>
        </>
    )
}

export default Profile;
