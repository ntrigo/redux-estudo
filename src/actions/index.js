import axios from 'axios';

import {
    FETCH_USERS,
    GET_USER_BY_ID
} from './types';

export function fetchUsers(){
    const request = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function getUserById(id){
    console.log("entrou: ")
    const request = axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);

    return{
        type: GET_USER_BY_ID,
        payload: request
    }
}