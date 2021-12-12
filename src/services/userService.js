import {db} from '../firebase';
import { getDoc, doc, setDoc} from 'firebase/firestore';

export const getUserHirings = async (userId) => {
    const hiredDocRef = doc(db, 'actorshired', userId);
    return await getDoc(hiredDocRef);
}

export const createEmptyHiring = async (userId) => {
    const actorshiredCollectionRef = doc(db, "actorshired", userId)
    return await setDoc(actorshiredCollectionRef,  {hired: []});
}