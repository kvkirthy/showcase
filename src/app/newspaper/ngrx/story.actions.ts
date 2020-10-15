import { createAction, props } from '@ngrx/store';
import { NewspaperPosts, StoryCategoryMap } from '../models/newspaper-post';

export const getAllStories = createAction('[Compose Component] getAllStories');
export const getAllStoriesSuccess 
    = createAction('[Compose Component] getAllStoriesSuccess', 
        props<NewspaperPosts>()
    );
export const getAvailableStories = createAction('[Compose Component getAvailableStories');
export const categorizeStories = createAction('[Compose Component categorizeStories', props<StoryCategoryMap>());