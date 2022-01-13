import { GET_SOURCES, MARK_FAVORITE_SOURCE, SET_LOADING } from './types';

export const getSources = () => ({
    type: GET_SOURCES,
});

export const markFavourite = (payload: { id: Number }) => ({
    type: MARK_FAVORITE_SOURCE,
    payload,
});

export const setLoading = () => ({
    type: SET_LOADING,
});