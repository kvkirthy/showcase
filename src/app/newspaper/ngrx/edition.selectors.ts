import { createSelector } from "@ngrx/store";

export const getNewspaperEditions = (state) => {
    return state.newspaperEditions.allEditions.editions;
}

export default createSelector(getNewspaperEditions, editions => editions);