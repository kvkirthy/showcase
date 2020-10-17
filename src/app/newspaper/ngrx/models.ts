import { NewspaperEditions } from '../models/editions';
import { NewspaperPosts } from "../models/newspaper-post";

export interface Editions {
    allEditions: NewspaperEditions;
}

export default interface Stories {
    allStories: NewspaperPosts;
    availableStories: NewspaperPosts;
}