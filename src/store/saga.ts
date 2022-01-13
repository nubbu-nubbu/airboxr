import {
    takeLatest, call, put, select,
  } from 'redux-saga/effects';
  
import HttpService from '../HttpService/HttpService';
import { loginAPI } from '../MappedAPI/MappedAPI';
import { BASE_URI, PASS_WORD, USER_NAME } from '../paths';
import { openToast } from '../Toasts';
import { ResponseGenerator } from './type';
import { LOGIN, LOGIN_SUCCESS, UPDATE_TOKEN } from './types';

const getToken = (state: any) => state.authentication.token;
  
function* loginSaga() {
    try {
        const TOKEN: ResponseGenerator = yield select(getToken);
        if (!TOKEN) {
            const payload = {
                email: USER_NAME,
                password: PASS_WORD
            }
            const response: ResponseGenerator = yield call(HttpService.post, BASE_URI, loginAPI, payload);
            if (response.status === 201) {
                yield put({
                    type: LOGIN_SUCCESS,
                    payload: response.data,
                });
            } else {
                openToast('error', 'Login Failed.');
            }
        }
    } catch (error) {
        openToast('error', 'Login Failed.');
    }
}

function* updateTokenSaga({ callback }: any) {
    try {
        const payload = {
            email: USER_NAME,
            password: PASS_WORD
        }
        const response: ResponseGenerator = yield call(HttpService.post, BASE_URI, loginAPI, payload);
        if (response.status === 201) {
            yield put({
                type: LOGIN_SUCCESS,
                payload: response.data,
            });
            callback && callback();
        } else {
            openToast('error', 'Token fetch Failed.');
        }
    } catch (error) {
        openToast('error', 'Token fetch Failed.');
    }
}

export function* AuthenticationWatcher() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(UPDATE_TOKEN, updateTokenSaga);
}
