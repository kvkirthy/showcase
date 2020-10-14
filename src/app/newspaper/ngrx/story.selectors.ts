import { createSelector } from "@ngrx/store";
import Stories from "./models";

const allStories = (state) => {
    console.log("1", state);
    return state.newspaperStories.stories.allStories;
}
export const getStories = createSelector( allStories, stories => {
    console.log("2", stories);
    return stories;
 });