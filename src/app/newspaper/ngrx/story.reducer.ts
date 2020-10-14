import * as actions from './story.actions';
import Stories from './models';
import { createReducer, on } from "@ngrx/store"
import { NewspaperPosts } from '../models/newspaper-post';


export const initialState = {
    allStories: {
        posts: [{"title":"javascript post","description":"this is a test message","imageId":""}]
    }
};

const getStateOnStoriesApiSuccess = (state: Stories, props: NewspaperPosts ): Stories => {
    let posts = state.allStories.posts.concat(props.posts) ;
    return {
        allStories: {
            posts
        }
    };
};

const _storyReducer = createReducer(
        initialState,
        on(actions.getAllStoriesSuccess, getStateOnStoriesApiSuccess)
    );

export function getStoryReducer(state: Stories, action) {
    return _storyReducer(state,action);
}