import { localhostUserToModel } from '../mappers/localhost-user-model.mapper';
import { UserModel } from '../models/users-model';

/**
 * 
 * @param {String|Number} id 
 * @returns { Promise<UserModel> }
 */
export const getUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url);
    const data = await res.json();

    const user = localhostUserToModel( data );

    return user;
}