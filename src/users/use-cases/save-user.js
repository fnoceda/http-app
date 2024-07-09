import { userModelToLocalHost } from "../mappers/user-to-localhost.mapper";
import { UserModel } from "../models/users-model";
import { localhostUserToModel } from '../mappers/localhost-user-model.mapper';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) =>{
    const user = new UserModel(userLike);

    if ( !user.firstName || !user.lastName ) 
        throw 'First & last name are required';

    const userToSave = userModelToLocalHost(userLike);
    let userUpdated;

    if ( user.id ) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser( userToSave );
    }


    return localhostUserToModel( userUpdated );

};

/**
 * 
 * @param {Like<UserModel>} user
 */
const createUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await res.json();
    return newUser;
};

/**
 * 
 * @param {Like<UserModel>} user
 */
const updateUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
};
