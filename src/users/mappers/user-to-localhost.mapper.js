import { UserModel } from "../models/users-model";


/**
 * 
 * @param {UserModel} user 
 */


export const userModelToLocalHost = (user) => {

    const {
        avatar, 
        balance, 
        firstName, 
        gender, 
        id, 
        isActive, 
        lastName,
    } = user;



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