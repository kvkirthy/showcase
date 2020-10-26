import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import * as actions from './story.actions';
import { PostService } from '../services/post.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class StoryEffects {

    getStories$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getAllStories),
        mergeMap(() => this.postService.getActiveStories()
            .pipe(
                map(stories => (actions.getAllStoriesSuccess({posts: stories}))),
                catchError(() => EMPTY),
            ))
        )
    );

    updateStoriesForEdition$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateStoriesForEdition),
        mergeMap((req) => this.postService.updateStoriesForEdition(req)
            .pipe(
                map(() => (actions.updateStoriesForEditionSuccess(true))),
                catchError(() => EMPTY),
            ))
        )
    );

    updateStoryJson$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateStoryJson),
        mergeMap((req) => this.postService.updatePost(req)
            .pipe(
                map(() => (actions.updateStoryJsonSuccess(true))),
                catchError(() => EMPTY),
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {}
}