import React from 'react';
import { Tweet } from '../types';
import { Tweet as TweetComponent } from './Tweet';
import { createUseStyles } from 'react-jss';

export interface Props {
    tweets: Tweet[]
}

export const TweetList = ({tweets}: Props) => {
    const classes = createUseStyles({
        list: {
            listStyle: 'none',
            margin: 0,
            padding: 0
        }
    })();

    return ( 
        <ul className={classes.list}>
            {tweets.map(tweet => (
            <li>
                <TweetComponent
                    username={tweet.name}
                    handle={tweet.handle}
                    profilePictureUrl={tweet.profile_picture}
                    text={tweet.contents} />
            </li>))}
        </ul>)
}