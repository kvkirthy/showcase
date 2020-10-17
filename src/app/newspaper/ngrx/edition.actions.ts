import { createAction, props } from '@ngrx/store';
import { NewspaperEdition, NewspaperEditions } from '../models/editions';

export const getAllNewspaperEditions = createAction('[Compose Component] getAllNewspaperEditions');

export const getAllEditionsSuccess 
    = createAction('[Compose Component] getAllEditionsSuccess', 
        props<NewspaperEditions>()
    );

export const setEdition 
    = createAction('[CreateNewsPaperEdition Component] setEdition',
        props<NewspaperEdition>()    
    );