
// local storage thing here

import { LS_KEYS } from '../constant';
import { LOGIN_SUCCESS } from './types';

const auth = window.localStorage.getItem(LS_KEYS.AUTH);

const isValidCache = ({ token }: { token: String }) => {
    if (typeof token === 'string') {
        // validation of token
        return true;
    }
    return false;
};

let authJson = null;

try {
    if (auth) authJson = JSON.parse(auth);
    const isValid = isValidCache(authJson);
    if (!isValid) {
        authJson = null;
        window.localStorage.setItem(LS_KEYS.AUTH, '');
    }
} catch (err) {
    authJson = null;
}

const initialState = {
    token: authJson ? authJson.token : null,
};

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            const data = {
                token: action.payload.accessToken,
            };
            window.localStorage.setItem(LS_KEYS.AUTH, JSON.stringify(data));
            return { ...state, ...data };
        default:
            return state;
    }
};

export default Reducer;
