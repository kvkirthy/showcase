import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import * as actions from './story.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostService } from '../services/post.service';
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

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {}
}