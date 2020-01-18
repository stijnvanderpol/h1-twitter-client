import React from 'react';
import { SearchField } from '../components/SearchField';
import { get } from '../utils/api';

const onSearchTwitter = (searchQuery: string) => {
    get('/tweets', searchQuery).then(response => response.json()).then(body => {
        console.log('body', body);
    });
}

export const TweetSearchField = () => <SearchField onSearchHandler={onSearchTwitter} placeholder="Search for a tweet" />;