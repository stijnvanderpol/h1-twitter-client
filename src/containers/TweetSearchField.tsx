import React from 'react';
import { connect } from 'react-redux'
import { SearchTweets, Tweet, HashtagCount } from '../types';

import { setTweets, setTop10Hashtags } from '../redux/actions/tweets';

import { SearchField } from '../components/SearchField';
import { get } from '../utils/api';

const mapDispatchToProps = {
    setTweets,
    setTop10Hashtags
}

interface Props {
    setTweets: (tweets: Tweet[]) => void,
    setTop10Hashtags: (payload: HashtagCount) => void
}


export const TweetSearchField = connect(null, mapDispatchToProps)(
    ({setTweets, setTop10Hashtags}: Props) => {
    const onSearchTwitter = (searchQuery: string) => {
        get('/tweets', searchQuery).then(response => response.json()).then((body: SearchTweets) => {
            setTweets(body.tweets);
            setTop10Hashtags(body.meta.top10Hashtags);
        });
    }
    
    return <SearchField onSearchHandler={onSearchTwitter} placeholder="Search for a tweet" />
});



