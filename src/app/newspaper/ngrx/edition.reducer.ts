import { Editions } from './models';
import * as actions from './edition.actions';
import { createReducer, on } from "@ngrx/store";
import { NewspaperEdition, NewspaperEditions } from '../models/editions';
import { state } from '@angular/animations';

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
    on(actions.setEdition, (state: Editions, props: NewspaperEdition) => ({...state, selectedEdition:props}) ),
);

export function getEditionReducer(state: Editions, action) {
    return _storyReducer(state,action);
}