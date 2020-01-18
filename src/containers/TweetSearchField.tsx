import React from 'react';
import { SearchField } from '../components/SearchField';

const onSearchTwitter = (searchQuery: string) => {
    console.log('going to search twitter for', searchQuery);
}

export const TweetSearchField = () => <SearchField onSearchHandler={onSearchTwitter} placeholder="Search for a tweet" />;