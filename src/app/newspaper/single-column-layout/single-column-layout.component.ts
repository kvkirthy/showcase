import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { NewspaperEdition } from '../models/editions';
import { selectedEdition } from '../ngrx/edition.selectors';
import { getStoryByCateory } from '../ngrx/story.selectors';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-single-column-layout',
  templateUrl: './single-column-layout.component.html',
  styleUrls: ['./single-column-layout.component.css']
})
export class SingleColumnLayoutComponent implements OnInit, OnDestroy {

  window: Window;
  showHideHelpTextCss="show";
  currentEditon: NewspaperEdition;
  bannerStories: NewspaperPost[] = [];
  newsbitStories: NewspaperPost[] = [];
  highlightStories: NewspaperPost[] = [];

  destory$ = new Subject<void>();

  constructor(private store: Store, 
    @Inject(DOCUMENT) private document: Document,
    private dialog: MatBottomSheet) { }

  ngOnInit(): void {

    this.window = this.document.defaultView;

    this.store
      .select(selectedEdition)
      .subscribe((ne: NewspaperEdition) => {
        this.currentEditon = ne;
        this.resetStories();
        if (ne && ne._id) {
          this.store
            .select(getStoryByCateory, { category: StoryCategory.Banner, editionId: ne._id })
            .pipe(takeUntil(this.destory$))
            .subscribe((bnSt: NewspaperPost[]) => {
              if (bnSt && bnSt.length > 0 && bnSt[0].edition._id === this.currentEditon._id) {
                this.bannerStories = bnSt;
              }
            });

          this.store
            .select(getStoryByCateory, { category: StoryCategory.Highlight, editionId: ne._id })
            .pipe(takeUntil(this.destory$))
            .subscribe((nph: NewspaperPost[]) => {
              if (nph && nph.length > 0 && nph[0].edition._id === this.currentEditon._id) {
                this.highlightStories = nph;
              }
            });

            this.store
            .select(getStoryByCateory, { category: StoryCategory.NewsBit, editionId: ne._id })
            .pipe(takeUntil(this.destory$))
            .subscribe((nnb: NewspaperPost[]) => {
              if (nnb && nnb.length > 0 && nnb[0].edition._id === this.currentEditon._id) {
                this.newsbitStories = nnb;
              }
            });
        }
      });
  }

  formatDescription(str:string, length:number): string{
    if(str.length > length){
      return str.substring(0, length) + "...";
    } else {
      return str;
    }
  }

  ngOnDestroy(){
    this.destory$.complete();

  }

  openUrl(story:NewspaperPost){
    this.window.open(story.linkToPost, "__blank");
  }

  showModelDialog(story: NewspaperPost){
    this.dialog.open(PostDetailsComponent, {
      data: story
    });
  }

  resetStories(){
    this.bannerStories = [];
    this.newsbitStories = [];
    this.highlightStories = [];
  }

  closeHelpInfo(){
    this.showHideHelpTextCss="hide";
  }

}
