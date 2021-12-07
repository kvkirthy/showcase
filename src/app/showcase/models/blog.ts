export interface Blog{
    title: string,
    tags?: string[];
    imageUrl: string,
    linkToBlog: string
    dateAdded?: string;
    description: string,
    bannerImage: string;
    isHighlighted?: boolean,
};