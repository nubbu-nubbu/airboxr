/* eslint-disable no-unused-expressions */
import {
    call, takeLatest, select, put,
} from 'redux-saga/effects';
import { GET_SOURCES_SUCCESS, GET_SOURCES, SET_LOADING_OFF } from './types';
import { getSourceAPI } from '../../MappedAPI/MappedAPI';
import HttpService from '../../HttpService/HttpService';
import { BASE_URI } from '../../paths';
import { ResponseGenerator } from '../type';
import { openToast } from '../../Toasts';
import { UPDATE_TOKEN } from '../types';
import store from '../store';
import { getSources } from './action';
  
const getToken = (state: any) => state.authentication.token;
  
function* getSourcesSaga() {
    try {
        const TOKEN: ResponseGenerator = yield select(getToken);
        const res: ResponseGenerator = yield call(HttpService.get, BASE_URI, getSourceAPI, TOKEN as string);
        if (res.status === 200) {
            yield put({
                type: GET_SOURCES_SUCCESS,
                payload: res.data,
            });
        } else {
            openToast('error', 'Get sources failed.');
            yield put({ type: SET_LOADING_OFF });
        }
    } catch (error:any) {
        if (error.response.status === 401) {
            yield put({ type: UPDATE_TOKEN, callback: () => {
                store.dispatch(getSources());
            } });
        } else {
            openToast('error', 'Get sources failed.');
            yield put({ type: SET_LOADING_OFF });
        }
    }
}

export function* sourceSaga() {
    yield takeLatest(GET_SOURCES, getSourcesSaga);
}
  