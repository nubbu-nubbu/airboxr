
import { LOGIN, UPDATE_TOKEN } from './types';

export const login = () => ({
    type: LOGIN,
});

export const updateToken = (callback: any) => ({
    type: UPDATE_TOKEN,
    callback,
});