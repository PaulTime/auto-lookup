import { combineReducers } from 'redux';

import auth from './auth';
import domain from './domain';

export const rootReducer = combineReducers({ auth, domain });
