import { UserModel } from "../models/users-model";


/**
 * 
 * @param {UserModel} user 
 */


export const userModelToLocalHost = (user) => {
    console.log(user);

    const userLocalhost = {
        avatar, 
        balance, 
        firstName, 
        gender, 
        id, 
        isActive, 
        lastName,
    } = user;


    console.log(userLocalhost);

    return {
        avatar, 
        balance, 
        first_name: firstName, 
        gender, 
        id, 
        isActive, 
        last_name: lastName,
    };
};