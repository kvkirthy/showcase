import { createSelector } from "@ngrx/store";
import { NewspaperEdition } from '../models/editions';
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';

const allStories = (state) => {
    return state.newspaperStories.stories.allStories.posts;
}

export const getStoryById = createSelector(allStories, (stories: NewspaperPost[], props: String) => {
    return stories.find(story => story._id === props);
});

export const getAssignedStories 
    = createSelector( allStories, 
        (stories: NewspaperPost[], props?) => {
            if(props?.editionId){
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
        (stories: NewspaperPost[]) => stories.filter(story => story.edition === undefined || story.edition === null));

export const getUnassignedToCurrentEdition 
        = createSelector( allStories, 
            (stories: NewspaperPost[], props: {editionId: string}) => {
                // console.log("stories => ", stories, stories.map(s=> s.edition._id), props);
                return stories.filter(story =>
                    !story.edition || story.edition._id === null
                    || story.edition._id === undefined
                    || story.edition._id !== props.editionId
                );
            });        

export const getStoryByCateory = createSelector( allStories, (stories: NewspaperPost[], props: {category: StoryCategory, editionId: string}) => {
    return stories.filter(story => story.storyCategory === props.category && story.edition && story.edition._id === props.editionId);
});