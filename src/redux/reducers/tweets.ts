import { SET_TWEETS, SET_TOP_10_HASHTAGS } from "../types/tweets";
import { stat } from "fs";

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
        return {
            ...state,
            tweets: action.payload
        }
    }
    case SET_TOP_10_HASHTAGS: {
        return {
            ...state,
            meta: {
                ...state.meta,
                top10Hashtags: action.payload
            }
        }
    }
    default:
        return state;
    }
}
