import * as React from 'react';
import {createUseStyles} from 'react-jss'

import { Tweet } from '../components/Tweet';
import { TweetSearchField } from '../containers/TweetSearchField';

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

            <Tweet 
                username="stijnvanderpol"
                handle="@stijnio"
                profilePictureUrl=""
                text="Hello world!"
            />
        </div>
    )
};