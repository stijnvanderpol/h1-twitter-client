import { combineReducers } from 'redux';
import tweetsReducer from './tweets';

export const rootReducer = combineReducers({ tweetsReducer });
