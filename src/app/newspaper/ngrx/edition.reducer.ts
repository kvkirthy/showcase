import { Editions } from './models';
import * as actions from './edition.actions';
import { createReducer, on } from "@ngrx/store";
import { NewspaperEdition, NewspaperEditions } from '../models/editions';

const initialState: Editions = {
    allEditions: {
        editions: []
    }
}

const getAllEditions = (state: Editions, props: NewspaperEditions) => {
    let sortedEditions = [...props.editions];
    sortedEditions.sort((current, prev) => {
        return new Date(current.dateCreated).getTime() - new Date(prev.dateCreated).getTime()
    })
    .reverse();

    return {
        ...state,
        allEditions: {
            editions: sortedEditions
        }
    };
};

const _storyReducer = createReducer(
    initialState,
    on(actions.getAllEditionsSuccess, getAllEditions),
    on(actions.setEdition, (state: Editions, props: NewspaperEdition) => ({...state, selectedEdition:props}) ),
);

export function getEditionReducer(state: Editions, action) {
    return _storyReducer(state,action);
}