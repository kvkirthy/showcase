import { createAction, props } from '@ngrx/store';
import { NewspaperEditions } from '../models/editions';

export const getAllNewspaperEditions = createAction('[Compose Component] getAllNewspaperEditions');

export const getAllEditionsSuccess 
    = createAction('[Compose Component] getAllEditionsSuccess', 
        props<NewspaperEditions>()
    );