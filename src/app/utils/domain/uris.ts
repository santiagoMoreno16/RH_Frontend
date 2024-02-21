import { environment } from "src/environments/environment";

export const API_URL = environment.url;

// Authentication
export const API_REGISTER = API_URL + 'api/auth';
export const API_LOGIN = API_URL + 'api/auth';
export const API_AUTH = API_URL + 'api/auth/';
export const API_VALIDATE = API_URL + 'api/auth/';


// User

export const API_GET_USER = API_URL + 'api/user';
export const API_GET_USER_EMAIL = API_URL + 'api/auth';


// Points

export const API_GET_USER_POINTS = API_URL + 'api/points';
