import React, { useState, ChangeEvent, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDebounce } from 'use-debounce';

export interface Props {
    onSearchHandler: (query: string) => void;
    debounce?: number;
    placeholder: string;
}

export const SearchField = ({onSearchHandler, debounce = 500, placeholder}: Props) => {
    const [searchString, setSearchString] = useState('')
    const [debouncedSearchString] = useDebounce(searchString, debounce);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
    }

    useEffect(() => {
        if (debouncedSearchString.trim().length) {
            onSearchHandler(debouncedSearchString)
        }

    }, [debouncedSearchString, onSearchHandler]);

    const classes = createUseStyles({
        input: {
            margin: 20,
            marginLeft: 0,
            fontSize: '2em'
        }
    })();
        

    return (
        <input 
            className={classes.input}
            type="text" 
            onChange={onChangeHandler} 
            placeholder={placeholder} />
    );
}