import { createAction, props } from '@ngrx/store';
import { NewspaperPost, NewspaperPosts, StoryCategoryMap } from '../models/newspaper-post';

export const getAllStories = createAction('[Compose Component] getAllStories');
export const getAllStoriesSuccess 
    = createAction('[Compose Component] getAllStoriesSuccess', 
        props<NewspaperPosts>()
    );

// export const getAvailableStories = createAction('[Compose Component getAvailableStories');
export const categorizeStories = createAction('[Compose Component categorizeStories', props<StoryCategoryMap>());
export const updateStory = createAction('[Compose Component updateStory', props<NewspaperPost>());

export const updateStoriesForEdition = createAction('[Compose Component updateStoriesForEdition', props<NewspaperPosts>());
export const updateStoriesForEditionSuccess = createAction('[Compose Component updateStoriesForEditionSuccess', props<Boolean>());

export const updateStoryJson = createAction('[UpdatePosts Component updateStoryJson', props<NewspaperPost>());
export const updateStoryJsonSuccess = createAction('[UpdatePosts Component updateStoryJsonSuccess', props<Boolean>());