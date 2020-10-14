export class User {
    fullname: string;
    twitterHandle: string;
    userImageId: string;
}

export class NewspaperPost {
    title: string;
    description: string;
    imageId: string;
    linkToPost: string;
    user: User;
}

export class NewspaperPosts {
    posts: NewspaperPost[]
}