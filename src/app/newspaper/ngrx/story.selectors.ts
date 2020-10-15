import { createSelector } from "@ngrx/store";
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';

const allStories = (state) => {
    return state.newspaperStories.stories.allStories.posts;
}
export const getUnassignedStories = createSelector( allStories, (stories: NewspaperPost[]) => stories.filter(story => story.storyCategory === undefined || story.storyCategory === null));

export const getStoryByCateory = createSelector( allStories, (stories: NewspaperPost[], props: StoryCategory) => {
    return stories.find(story => story.storyCategory === props);
});