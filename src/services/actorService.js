import {db} from '../firebase';
import {collection, getDocs, addDoc, getDoc, doc} from 'firebase/firestore';

const portfoliosCollectionRef = collection(db, 'portfolios');

export const create = async (actorData) => {
    return await addDoc(portfoliosCollectionRef, actorData);
}
// export const update = (user, actorId, actorData) => {
//     const updateEndPoint = `${endPoint}/${actorId}`;
//     return requester(updateEndPoint, "PUT", actorData, user);
// } 

export const getAll = async () => {
    return await getDocs(portfoliosCollectionRef);
};

export const getOne = async (id) => {
    const userDocRef = doc(db, 'portfolios', id);
    return await getDoc(userDocRef);
};