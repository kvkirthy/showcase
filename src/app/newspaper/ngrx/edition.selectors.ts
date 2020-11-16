import { createSelector } from "@ngrx/store";
import { NewspaperEdition } from '../models/editions';

export const getNewspaperEditions = (state) => {
    return state.newspaperEditions;
}

export const getPublishedNewspaperEditions = (state) => {
    return state?.newspaperEditions?.allEditions?.editions.filter( e => e.isPublished === "true" );
}

export const selectedEdition = createSelector(getNewspaperEditions, (npeditions) => npeditions.selectedEdition);
export const allNewspaperEditions = createSelector(getNewspaperEditions, npeditions => npeditions.allEditions.editions);
export const publishedNewspaperEditions = createSelector(getPublishedNewspaperEditions, npeditions => npeditions);

