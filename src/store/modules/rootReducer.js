import { combineReducers } from 'redux';

import { ipReducer as ip } from './ip/reducer';
import { userReducer as user } from './user/reducer';

export const rootReducer = combineReducers({
    ip,
    user,
});