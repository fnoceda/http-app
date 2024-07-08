import { userModelToLocalHost } from "../mappers/user-to-localhost.mapper";
import { UserModel } from "../models/users-model";
/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) =>{
    const user = new UserModel(userLike);

    const userToSave = userModelToLocalHost(userLike);

    if(user.id){
        throw 'No implementada la actualizacion';
        return ;
    }

    const updateUser = await createUser(userToSave);

    console.log(updateUser);

    return updateUser;

};

/**
 * 
 * @param {Like<UserModel>} user
 */
const createUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const str = JSON.stringify(user);
    console.log(`str => ${str}`);
    const res = await fetch(url, {
        method: 'POST',
        body: str,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await res.json();
    return newUser;
};