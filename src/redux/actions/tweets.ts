import * as types from '../types/tweets';
import { Tweet, HashtagCount } from '../../types';

export const setTweets = (tweets: Tweet[]) => ({
    type: types.SET_TWEETS,
    payload: tweets  
});

export const setTop10Hashtags = (top10Hashtags: HashtagCount) => ({
    type: types.SET_TOP_10_HASHTAGS,
    payload: top10Hashtags
});