import { GET_SOURCES_SUCCESS, MARK_FAVORITE_SOURCE, SET_LOADING, SET_LOADING_OFF } from './types';

const initialState = {
    sources: [],
    loading: false,
};

export const sourceReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SOURCES_SUCCESS:
            return {
                ...state,
                loading: false,
                sources: action.payload.map((src: any) => ({ ...src, favorite: false })),
            };
        case MARK_FAVORITE_SOURCE:
            return {
                ...state,
                sources: state.sources.map((src: any) => {
                    if (src.id === action.payload.id) {
                        return { ...src, favorite: !src.favorite };
                    }
                    return src;
                }),
            };
        case SET_LOADING:
            return { ...state, loading: true };
        case SET_LOADING_OFF:
            return { ...state, loading: false };
        default:
            return state;
    }
};