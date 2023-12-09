import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// With Thunks
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export const createAction = (type: string, payload: any) => ({ type, payload });
