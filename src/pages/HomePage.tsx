import * as React from 'react';
import {createUseStyles} from 'react-jss'

import { TweetSearchField } from '../containers/TweetSearchField';
import { ConnectedTweetList } from '../containers/ConnectedTweetList';
import { ConnectedTop10Hashtags } from '../containers/ConnectedTop10Hashtags';

export const HomePage = () => {
    const classes = createUseStyles({
        'container': {
            display: 'flex',
            flexDirection: 'row',
            width: 1200,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        main: {
            width: 800
        },
        sidebar: {
            width: 400
        }
    })();

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <TweetSearchField />
                <ConnectedTweetList />
            </div>
            <div className={classes.sidebar}>
                <h1>Top 10 hashtags</h1>
                <ConnectedTop10Hashtags />
            </div>
        </div>
    )
};