import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage:0,
    users:[],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    
    if(users.length === 0) return; 
    state.currentPage += 1;
    state.users = users;

};

const loadPreviousPage = async() => {
    if(state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    
    if(users.length === 0) return; 
    state.currentPage -= 1;
    state.users = users;
};

const onUserChange = async() => {
    throw new Error('Not implemented');
};

const reloadPage = async() => {
    throw new Error('Not implemented');
};

export default {
    loadNextPage,
    loadPreviousPage,  
    onUserChange, 
    reloadPage,
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users], // objetos pasan por referencia, por lo que hay que romper la referencia
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage, // primitivo pasa por valor
};