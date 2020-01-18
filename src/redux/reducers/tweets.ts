import { SET_TWEETS, SET_TOP_10_HASHTAGS } from "../types/tweets";

const initialState = {
    tweets: [],
    top10Hashtags: {}
};

export interface Action {
    type: string;
    payload: any;
}

export default function(state = initialState, action: Action) {
    switch (action.type) {
    case SET_TWEETS: {
        return {
            ...state,
            tweets: action.payload
        }
    }
    case SET_TOP_10_HASHTAGS: {
        return {
            ...state,
            top10Hashtags: action.payload
        }
    }
    default:
        return state;
    }
}
