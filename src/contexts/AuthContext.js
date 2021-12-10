import { createContext, useContext, useState, useEffect } from "react";
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
         return signOut(auth);
    }

    // notify when user gets set
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userData) => {
            setCurrentUser(userData)
        });
        return unsubscribe;
    }, [])

    

    const value = {
        currentUser,
        register,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>
    )
}