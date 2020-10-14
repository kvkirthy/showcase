import { createAction, props } from '@ngrx/store';
import { NewspaperPosts } from '../models/newspaper-post';

export const getAllStories = createAction('[Compose Component] getAllStories');
export const getAllStoriesSuccess 
    = createAction('[Compose Component] getAllStoriesSuccess', 
        props<NewspaperPosts>()
    );
