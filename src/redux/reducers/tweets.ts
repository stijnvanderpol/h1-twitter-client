import { SET_TWEETS } from "../types/tweets";

const initialState = {
    tweets: [],
    meta: {
        top10Hashtags: {}
    }
};

export interface Action {
    type: string;
    payload: any;
}

export default function(state = initialState, action: Action) {
    switch (action.type) {
    case SET_TWEETS: {
        const { tweets } = action.payload;
        
        return {
            ...state,
            tweets: tweets
        };
    }
    default:
        return state;
    }
}
