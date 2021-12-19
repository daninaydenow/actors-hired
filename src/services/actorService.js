import {db} from '../firebase';
import {collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';

const portfoliosCollectionRef = collection(db, 'portfolios');

export const create = async (actorData) => {
    return await addDoc(portfoliosCollectionRef, actorData);
}

export const update = async (actorId, actorData) => {
    const userDocRef = doc(db, 'portfolios', actorId);
    return await updateDoc(userDocRef, actorData);
} 

export const remove = async (actorId) => {
    const userDocRef = doc(db, 'portfolios', actorId);
    return await deleteDoc(userDocRef);
}

export const hire = async (userId, hiredNewActor) => {
    const hiredDocRef = doc(db, 'actorshired', userId);
    return await updateDoc(hiredDocRef, {hired: hiredNewActor});
}

export const getAll = async () => {
    return await getDocs(portfoliosCollectionRef);
};

export const getOne = async (id) => {
    const userDocRef = doc(db, 'portfolios', id);
    return await getDoc(userDocRef);
};
