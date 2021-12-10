import {db} from '../firebase';
import {collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';

const portfoliosCollectionRef = collection(db, 'portfolios');

export const create = async (actorData) => {
    return await addDoc(portfoliosCollectionRef, actorData);
}
export const update = async (id, actorData) => {
    const userDocRef = doc(db, 'portfolios', id);
    return await updateDoc(userDocRef, actorData);
} 

export const remove = async (id) => {
    const userDocRef = doc(db, 'portfolios', id);
    return await deleteDoc(userDocRef);
}

export const getAll = async () => {
    return await getDocs(portfoliosCollectionRef);
};

export const getOne = async (id) => {
    const userDocRef = doc(db, 'portfolios', id);
    return await getDoc(userDocRef);
};