import { createStore } from 'redux-dynamic-modules-core';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import getAuthModule from './module';

const initialState = {};

const store = createStore({
    initialState,
    extensions: [getSagaExtension()],
},
getAuthModule());

export default store;