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
    imageId: string;
    linkToPost: string;
    user: User;
    storyCategory?: StoryCategory;
}

export class StoryCategoryMap {
    storyIds: string[];
    newCategory: StoryCategory;
}

export class NewspaperPosts {
    posts: NewspaperPost[]
}