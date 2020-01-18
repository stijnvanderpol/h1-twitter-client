export interface Tweet {
    id: string;
    name: string;
    handle: string;
    profile_picture: string;
    contents: string;
}

export type HashtagCount = {[hashtag: string]: number};

export interface SearchTweets {
    tweets: Tweet[],
    meta: {
        top10Hashtags: HashtagCount
    }
}