import { NewspaperEdition } from './editions';

export class User {
    fullname: string;
    twitterHandle: string;
    userImageId: string;
}

export enum StoryCategory{
    None,
    Banner,
    Highlight,
    NewsBit,
    Feed
}

export class NewspaperPost {
    _id?: string;
    title: string;
    description: string;
    story: string;
    imageId: string;
    linkToPost: string;
    user: User;
    storyCategory?: StoryCategory;
    edition?: NewspaperEdition;
}

export class StoryCategoryMap {
    storyIds: string[];
    newCategory: StoryCategory;
    edition?: NewspaperEdition;
}

export class NewspaperPosts {
    posts: NewspaperPost[]
}