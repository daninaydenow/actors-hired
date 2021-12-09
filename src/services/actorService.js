import { requester } from "../api/requester";

const endPoint = '/data/actors';

export const create = (actorData, user) => {
    return requester(endPoint, "POST", actorData, user)
}
export const update = (user, actorId, actorData) => {
    const updateEndPoint = `${endPoint}/${actorId}`;
    return requester(updateEndPoint, "PUT", actorData, user);
} 

export const getAll = () => {
    return requester(endPoint, "GET", undefined, undefined)
        .then(res => res.json())
};

export const getOne = (actorId) => {
    return requester(`${endPoint}/${actorId}`)
        .then(res => res.json())
};