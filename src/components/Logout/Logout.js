import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import * as authService from '../../services/authService';

const Logout = () => {
    const navigate = useNavigate();
    const { logout, user } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user)
            .then(() => {
                logout();
                navigate('/');
            })
    }, [])


    return null;
}

export default Logout;