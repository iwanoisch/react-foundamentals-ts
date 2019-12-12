import axios from 'axios';
import {Simulate} from "react-dom/test-utils";


export type Json = any;

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

//https://jsonplaceholder.typicode.com/users

export const restapi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

restapi.interceptors.response.use( response => {
    return response;
}, (error) => {
    console.log('errore restApi', error);
    return Promise.reject(error)
});
