
import { requester } from "../api/requester";

export const login = (email, password) => {
    const endPoint = '/users/login';
    return requester(endPoint, "POST", {email, password}, null)
        .then(res => res.json());
}

export const register = (email, password) => {
    const endPoint = '/users/register';
    return requester(endPoint, "POST", {email, password}, null)
        .then(res => res.json());
}

export const logout = (user) => {
    const endPoint = '/users/logout';
    return requester(endPoint, "GET", undefined, user)
}