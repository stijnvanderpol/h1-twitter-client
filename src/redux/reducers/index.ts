import { combineReducers } from 'redux';
import tweets, { TweetsState } from './tweets';

export interface State {
    tweets: TweetsState
}

export const rootReducer = combineReducers({ tweets });
