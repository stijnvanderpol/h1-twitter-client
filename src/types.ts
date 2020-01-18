export interface Tweet {
    id: string;
    name: string;
    handle: string;
    profile_picture: string;
    contents: string;
}

export interface SearchTweets {
    tweets: Tweet[],
    meta: {
        top10Hashtags: {[hashtag: string]: number}
    }
}