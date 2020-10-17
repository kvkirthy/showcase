import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import * as actions from './edition.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EditionService } from '../services/edition.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class EditionEffects {

    getStories$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getAllNewspaperEditions),
        mergeMap(() => this.editionSvc.getAll()
            .pipe(
                map(list => (actions.getAllEditionsSuccess({editions: list}))),
                catchError(() => EMPTY),
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private editionSvc: EditionService
    ) {}
}