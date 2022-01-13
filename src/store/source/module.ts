import { getSources, setLoading } from './action';
import { sourceReducer } from './reducer';
import { sourceSaga } from './saga';

export function getSourceModule() {
    return {
        id: 'source',
        reducerMap: {
            source: sourceReducer,
        },
        sagas: [sourceSaga],
        initialActions: [setLoading(), getSources()],
    };
}