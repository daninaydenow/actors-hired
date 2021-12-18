import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import * as actorService from '../../services/actorService';

const UserRoute = ({ children }) => {
    const {currentUser} = useAuth();
    const {portFolioId} = useParams();
    let userPortfolios = [];
    useEffect(() => {
        actorService.getAll()
        .then(snapshot => {
            userPortfolios = snapshot.docs.map((doc) => ({_id: doc.id })).filter(x => x._ownerId === currentUser.uid);
        })
    })

    return userPortfolios.includes(portFolioId) ? children : <Navigate to="/"/>
}

export default UserRoute;
