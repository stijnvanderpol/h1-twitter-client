import React from 'react';
import { connect } from 'react-redux';

import { TweetList } from '../components/TweetList';

import { Tweet } from '../types';
import { State } from '../redux/reducers';


const mapStateToProps = (state: State) => ({
    tweets: state.tweets.tweets
});

interface Props {
    tweets: Tweet[];
}

export const ConnectedTweetList = connect(mapStateToProps)(({tweets}: Props) => (<TweetList tweets={tweets} />));