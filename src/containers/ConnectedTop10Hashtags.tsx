import React from 'react';
import { connect } from 'react-redux';

import { State } from '../redux/reducers';
import { Tweet, HashtagCount } from '../types';

const mapStateToProps = (state: State) => ({
    top10Hashtags: state.tweets.top10Hashtags,
    tweets: state.tweets.tweets
});

interface Props {
    top10Hashtags: HashtagCount;
    tweets: Tweet[];
}

export const ConnectedTop10Hashtags = connect(mapStateToProps)(({top10Hashtags, tweets}: Props) => {
    const hashtags = Object.keys(top10Hashtags);

    if (hashtags.length) {
        return (
            <ol>
                {Object.keys(top10Hashtags).map(hashtag => (
                    <li key={hashtag}>
                        {hashtag} total count: {top10Hashtags[hashtag]}
                    </li>
                ))}
            </ol>
        )
    }

    if (tweets.length) {
        return <span>No hashtags found :(</span>
    }

    return null;
});