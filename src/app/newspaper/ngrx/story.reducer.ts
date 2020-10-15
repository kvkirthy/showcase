import * as actions from './story.actions';
import Stories from './models';
import { createReducer, on } from "@ngrx/store"
import { NewspaperPosts, StoryCategory, StoryCategoryMap } from '../models/newspaper-post';
import { StoryEffects } from './story.effects';

export const initialState: Stories = {
    allStories: {
        posts: []
    },
    availableStories: {
        posts: []
    }
};

const getStateOnStoriesApiSuccess = (state: Stories, props: NewspaperPosts ) => {
    let posts = state.allStories.posts.concat(props.posts) ;
    return {
        ...state,
        allStories: {
            posts
        },
        availableStories: {
            posts
        }
    };
};

const getAvailableStories = (state: Stories) => ({ ...state, availableStories: state.availableStories});
const categorizeStories = (state: Stories, props: StoryCategoryMap) => {
    let newState = [];
    state.allStories.posts.map( story => {
        let updatedStory;
        if( props.storyIds.find( p => p === story._id)){
            updatedStory = {...story, storyCategory: props.newCategory};
            newState.push(updatedStory);
        } else if(props.newCategory === StoryCategory.Banner){
            updatedStory = {...story, storyCategory: null};
            newState.push(updatedStory);
        } else {
            newState.push(story);
        }
    });
    return {...state, allStories: {posts: newState}};
}

const _storyReducer = createReducer(
        initialState,
        on(actions.getAllStoriesSuccess, getStateOnStoriesApiSuccess),
        on(actions.getAvailableStories, getAvailableStories),
        on(actions.categorizeStories, categorizeStories)
    );

export function getStoryReducer(state: Stories, action) {
    return _storyReducer(state,action);
}