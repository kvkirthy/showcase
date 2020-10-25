import { createSelector } from "@ngrx/store";
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';

const allStories = (state) => {
    return state.newspaperStories.stories.allStories.posts;
}

export const getAssignedStories 
    = createSelector( allStories, 
        (stories: NewspaperPost[], props) => {
            if(props.editionId){
                return stories.filter(story => story.storyCategory !== undefined 
                    && story.storyCategory !== null
                    && story.edition && story.edition._id === props.editionId);
            } else {
                return stories.filter(story => story.storyCategory !== undefined 
                    && story.storyCategory !== null);
            }
        });

export const getUnassignedStories 
    = createSelector( allStories, 
        (stories: NewspaperPost[]) => stories.filter(story => story.storyCategory === undefined || story.storyCategory === null));

export const getStoryByCateory = createSelector( allStories, (stories: NewspaperPost[], props: {category: StoryCategory, editionId: string}) => {
    return stories.filter(story => story.storyCategory === props.category && story.edition && story.edition._id === props.editionId);
});