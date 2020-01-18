import React from 'react';
import { createUseStyles } from 'react-jss';

export interface Props {
    username: string;
    handle: string;
    profilePictureUrl: string;
    text: string;
}

export const Tweet = ({username, handle, profilePictureUrl, text}: Props) => {
    const classes = createUseStyles({
        container: {
            width: 700,
            border: '1px solid #828282',
            display: 'flex',
            flexDirection: 'column',
            padding: 20
        },
        userInfoContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        profilePicture: {
            borderRadius: '100%',
            marginRight: 20,
        },
        nameContainers: {
            display: 'flex',
            flexDirection: 'column'
        },
        username: {
            fontWeight: 'bold'
        },
        handle: {
            color: '#828282'
        }
    })();


    return (
        <div className={classes.container}>
            <div className={classes.userInfoContainer}>
                {profilePictureUrl && <img className={classes.profilePicture} src={profilePictureUrl} />}
                <div className={classes.nameContainers}>
                <span className={classes.username}>{username}</span>
                <span className={classes.handle}>#{handle}</span>
                </div>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
}