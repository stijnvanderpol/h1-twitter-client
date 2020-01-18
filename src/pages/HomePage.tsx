import * as React from 'react';
import {createUseStyles} from 'react-jss'

import { TweetSearchField } from '../containers/TweetSearchField';
import { ConnectedTweetList } from '../containers/ConnectedTweetList';

export const HomePage = () => {
    const classes = createUseStyles({
        'container': {
            width: 1200,
            backgroundColor: 'red',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    })();

    return (
        <div className={classes.container}>
            <TweetSearchField />
            <ConnectedTweetList />
        </div>
    )
};