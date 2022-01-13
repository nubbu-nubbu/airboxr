import { login } from './action';
import authReducer from './reducer';
import { AuthenticationWatcher } from './saga';

const Module = () => ({
    id: 'authentication',
    reducerMap: {
        authentication: authReducer,
    },
    sagas: [AuthenticationWatcher],
    // Actions to fire when this module is added/removed
    initialActions: [login()],
    // finalActions: []
});

export default Module;
