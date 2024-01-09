import { environment } from "src/environments/environment";

export const API_URL = environment.url;

// Authentication
export const API_REGISTER = API_URL + 'api/auth';
export const API_LOGIN = API_URL + 'api/auth';
export const API_AUTH = API_URL + 'api/auth/';