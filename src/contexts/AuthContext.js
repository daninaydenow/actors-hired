import { createContext, useContext, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useLocalStorage("user", undefined);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (actorCredentials) => {
        setCurrentUser({
          uid: actorCredentials.user.uid,
          email: actorCredentials.user.email,
        });
      }
    );
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (actorCredentials) => {
        setCurrentUser({
          uid: actorCredentials.user.uid,
          email: actorCredentials.user.email,
        });
      }
    );
  };

  const logout = () => {
    return signOut(auth).then(() => {
      setCurrentUser(null);
    });
  };

  // notify when user gets set
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      setCurrentUser(userData);
    });
    return unsubscribe;
  }, [setCurrentUser]);

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
