import { UserModel } from "../models/users-model";

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {


    const {
        avatar, 
        balance, 
        first_name, 
        gender,
        id, 
        isActive,
        last_name, 
    } = localhostUser;

    return new UserModel({
        id, 
        isActive,
        balance, 
        avatar, 
        firstName: first_name, 
        lastName: last_name, 
        gender,
    });
};