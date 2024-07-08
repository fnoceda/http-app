import { localhostUserToModel } from "../mappers/localhost-user-model.mapper";
import { UserModel } from "../models/users-model";

/**
 * 
 * @param {Number} page
 * @returns {Promise<UserModel[]>}
 */
export const loadUsersByPage = async(page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    const users = data.map(localhostUserToModel);

    return users;
};


