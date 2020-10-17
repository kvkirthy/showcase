import { Editions } from './models';
import * as actions from './edition.actions';
import { createReducer, on } from "@ngrx/store";
import { NewspaperEditions } from '../models/editions';

const initialState: Editions = {
    allEditions: {
        editions: []
    }
}

const getAllEditions = (state: Editions, props: NewspaperEditions) => ({
    ...state,
    allEditions: props
});

const _storyReducer = createReducer(
    initialState,
    on(actions.getAllEditionsSuccess, getAllEditions),
);

export function getEditionReducer(state: Editions, action) {
    return _storyReducer(state,action);
}