import * as types from '../types/tweets';
import { Tweet } from '../../types';

export const setTweets = (tweets: Tweet[]) => ({
    type: types.SET_TWEETS,
    payload: tweets  
});