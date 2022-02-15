import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './modules/rootReducer';

export const store = createStore(
    rootReducer,    
    applyMiddleware(thunk, logger),
);