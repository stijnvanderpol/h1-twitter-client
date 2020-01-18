import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export const SearchField = () => {

    const [searchString, setSearchString] = useState('')
    const [debouncedSearchString] = useDebounce(searchString, 500);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
    }

    useEffect(() => {
        // search the API
    }, [debouncedSearchString]);

    return (
        <input type="text" onChange={onChangeHandler} />
    );
}