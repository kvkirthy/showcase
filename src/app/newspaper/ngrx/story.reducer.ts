import * as _ from 'lodash';
import Stories from './models';
import * as actions from './story.actions';
import { createReducer, on } from "@ngrx/store"
import { NewspaperPost, NewspaperPosts, StoryCategory, StoryCategoryMap } from '../models/newspaper-post';

export const initialState: Stories = {
    allStories: {
        posts: []
    }
};

const getStateOnStoriesApiSuccess = (state: Stories, props: NewspaperPosts ) => {
    let posts = state.allStories.posts.concat(props.posts) ;
    return {
        ...state,
        allStories: {
            posts
        }
    };
};

// const getStoryById = (state: Stories, props: String ) => {
//     return state.allStories.posts.find( story => story._id === props);
// }

const categorizeStories = (state: Stories, props: StoryCategoryMap) => {
    let newState = [];
    state.allStories.posts.map( story => {
        let updatedStory: NewspaperPost;
        if( props.storyIds.find( p => p === story._id)){
            if(props.newCategory === StoryCategory.None){
                updatedStory = {...story, storyCategory: null};
            } else{
                updatedStory = {...story, storyCategory: props.newCategory};
                updatedStory.edition = props.edition;
            }
            newState.push(updatedStory);
        } else {
            newState.push(story);
        }
    });
    return {...state, allStories: {posts: newState}};
}

const updateStory = (state:Stories, props: NewspaperPost) => {
    let newAllStories = _.cloneDeep(state.allStories);
    let selectedStory = newAllStories.posts.find(story => story._id === props._id);
    if(selectedStory){
        let index = newAllStories.posts.indexOf(selectedStory);
        newAllStories.posts.splice(index, 1, props);
    }
    return {allStories: newAllStories};
}

const _storyReducer = createReducer(
        initialState,
        // on(actions.getStoryById, getStoryById),
        on(actions.getAllStoriesSuccess, getStateOnStoriesApiSuccess),
        on(actions.categorizeStories, categorizeStories),
        on(actions.updateStory, updateStory)
    );

export function getStoryReducer(state: Stories, action) {
    return _storyReducer(state,action);
}