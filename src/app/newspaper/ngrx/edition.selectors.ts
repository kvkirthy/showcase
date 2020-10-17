import { createSelector } from "@ngrx/store";
import { NewspaperEdition } from '../models/editions';

export const getNewspaperEditions = (state) => {
    return state.newspaperEditions;
}

export const selectedEdition = createSelector(getNewspaperEditions, (npeditions) => npeditions.selectedEdition);
export default createSelector(getNewspaperEditions, npeditions => npeditions.allEditions.editions);

