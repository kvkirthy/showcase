import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import editorSelector from 'src/app/newspaper/ngrx/edition.selectors';
import { categorizeStories, getAllStories } from '../ngrx/story.actions';
import { CdkStep, StepperSelectionEvent, StepState } from '@angular/cdk/stepper';
import { getAllNewspaperEditions } from 'src/app/newspaper/ngrx/edition.actions';
import { NewspaperPost, StoryCategory } from 'src/app/newspaper/models/newspaper-post';
import { ImagePickerComponent } from 'src/app/newspaper/image-picker/image-picker.component';
import { getStoryByCateory, getUnassignedStories } from 'src/app/newspaper/ngrx/story.selectors';
import { NewspaperEdition } from '../models/editions';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  availableStories: NewspaperPost[] =[];
  selectedHighlightStory = new Array<NewspaperPost>();
  selectedNewsBits = new Array<NewspaperPost>();
  selectedNewsFeed = new Array<NewspaperPost>();
  bannerPost: NewspaperPost = new NewspaperPost();
  selectedTitle : string;
  selectedDescription : string;
  selectedBannerImage : string;
  selectedPostLink : string;
  selectedStoryId : string;
  editions: NewspaperEdition[];

  CategoryBanner = StoryCategory.Banner;
  CategoryHighlights = StoryCategory.Highlight;
  CategoryNewsBits = StoryCategory.NewsBit;
  CategoryFeed = StoryCategory.Feed;

  @ViewChild("stepper") stepper: MatHorizontalStepper;

  constructor(private dialog: MatDialog, 
    private store: Store){ }

  ngOnInit(): void {
    this.store
      .select(getUnassignedStories)
      .subscribe( (data) => {
        this.availableStories = data;
      });

      this.store
      .select(editorSelector)
      .subscribe( (data) => {
        console.log("editors -->", data);
        this.editions = data;
      });

      this.store
      .select(getStoryByCateory,StoryCategory.Banner)
      .subscribe( (data) => {
        if(data){
          this.bannerPost = data;
          this.showPreview(this.bannerPost);
        }
      });

      this.store.dispatch(getAllNewspaperEditions());
      this.store.dispatch(getAllStories());

  }

  onSelectTopBanner(post: NewspaperPost){
    this.showPreview(post);
  }

  showPreview(post: NewspaperPost){
    this.selectedStoryId = post._id;
    this.selectedTitle = post.title;
    this.selectedBannerImage = post.imageId;
    this.selectedDescription = post.description;
    this.selectedPostLink = post.linkToPost;
  }

  clearPreview(evt: StepperSelectionEvent){
    if(this.bannerPost && evt.selectedIndex === 1){
      this.showPreview(this.bannerPost);
    } else {
      this.selectedTitle = '';
      this.selectedBannerImage = '';
      this.selectedDescription = '';
      this.selectedPostLink = '';
    }
  }


  onSelectTopHighlight(post: NewspaperPost){
    this.selectedHighlightStory.push({
      _id: post._id,
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      linkToPost : post.linkToPost,
      user: post.user
    });
    this.saveSelected(this.CategoryHighlights, post._id)
  }

  onSelectNewsBits(post: NewspaperPost){
    this.selectedNewsBits.push({
      _id: post._id,
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      linkToPost : post.linkToPost,
      user: post.user
    });
    this.saveSelected(this.CategoryNewsBits, post._id)
  }

  onSelectNewsFeed(post: NewspaperPost){
    this.selectedNewsFeed.push({
      _id: post._id,
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      linkToPost : post.linkToPost,
      user: post.user
    });
    this.saveSelected(this.CategoryFeed, post._id)
  }

  handleRemovedPost(post: NewspaperPost){
    this.store.dispatch(categorizeStories({
      newCategory: StoryCategory.None,
      storyIds: [post._id]
    }));
  }

  imageClicked(){
    let dialogRef = this.dialog.open(ImagePickerComponent, {
      height: '100%',
      width: '100%'
    });
    dialogRef
      .afterClosed()
      .subscribe( data => this.selectedBannerImage=data);
  }

  saveSelected(category: StoryCategory, selectedStoryId:string = this.selectedStoryId){
    // console.log("button selected", this.selectedStoryId);
    this.store.dispatch(categorizeStories({
      newCategory: category,
      storyIds: [selectedStoryId]
    }));

  }

}
