import { NewspaperPosts } from "../models/newspaper-post";

export default interface Stories {
    allStories: NewspaperPosts;
    availableStories: NewspaperPosts;
}