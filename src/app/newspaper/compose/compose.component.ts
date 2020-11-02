import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { NewspaperEdition } from '../models/editions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { getAllNewspaperEditions } from 'src/app/newspaper/ngrx/edition.actions';
import { NewspaperPost, StoryCategory } from 'src/app/newspaper/models/newspaper-post';
import editorSelector, { selectedEdition } from 'src/app/newspaper/ngrx/edition.selectors';
import { ImagePickerComponent } from 'src/app/newspaper/image-picker/image-picker.component';
import { categorizeStories, getAllStories, updateStoriesForEdition, updateStory, updateStoryJson } from '../ngrx/story.actions';
import { getStoryByCateory, getAssignedStories, getUnassignedStories } from 'src/app/newspaper/ngrx/story.selectors';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  availableStories: NewspaperPost[] =[];
  assignedStories: NewspaperPost[] =[];
  selectedHighlightStory = new Array<NewspaperPost>();
  selectedNewsBits = new Array<NewspaperPost>();
  selectedNewsFeed = new Array<NewspaperPost>();
  selectedBannerStory = new Array<NewspaperPost>();
  selectedTitle : string;
  selectedDescription : string;
  selectedBannerImage : string;
  selectedPostLink : string;
  selectedStoryId : string;
  editions: NewspaperEdition[];
  currentEdition: NewspaperEdition;

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
      .subscribe((data) => {
        this.availableStories = data;
      });

      this.store
      .select(editorSelector)
      .subscribe( (data) => {
        this.editions = data;
      });

      this.store
        .select(selectedEdition)
        .subscribe( (data: NewspaperEdition) => {
          if(data){
            this.currentEdition = data;
            this.queryStoreByEdition(this.currentEdition._id);
            this.stepper.next();
          }
        });

      this.store.dispatch(getAllNewspaperEditions());
      this.store.dispatch(getAllStories());

  }

  private queryStoreByEdition(editionId: string){
    this.store
    .select(getAssignedStories, {editionId: editionId})
    .subscribe((data) => {
      this.assignedStories = data;
    });
    
    this.store
    .select(getStoryByCateory, {category: StoryCategory.Banner, editionId: editionId})
    .subscribe( (data) => {
      if(data){
        if(data && data.length > 0){
          this.selectedBannerStory = data;
        }
      }
    });

    this.store
    .select(getStoryByCateory, {category: StoryCategory.Highlight, editionId: editionId})
    .subscribe( (data) => {
      if(data){
        this.selectedHighlightStory = data;
      }
    });

    this.store
    .select(getStoryByCateory,{category: StoryCategory.Feed, editionId: editionId})
    .subscribe( (data) => {
      if(data){
        this.selectedNewsFeed = data;
      }
    });

    this.store
    .select(getStoryByCateory,{category: StoryCategory.NewsBit, editionId: editionId})
    .subscribe( (data) => {
      if(data){
        this.selectedNewsBits = data;
      }
    });

  }

  onSelectTopBanner(post: NewspaperPost){
    this.selectedBannerStory.push({
      _id: post._id,
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      story: post.story,
      linkToPost : post.linkToPost,
      user: post.user,
    });
    this.saveSelected(this.CategoryBanner, post._id)
    // this.showPreview(post);
  }

  showPreview(post: NewspaperPost){
    this.selectedStoryId = post._id;
    this.selectedTitle = post.title;
    this.selectedBannerImage = post.imageId;
    this.selectedDescription = post.description;
    this.selectedPostLink = post.linkToPost;
  }

  clearPreview(){
      this.selectedTitle = '';
      this.selectedBannerImage = '';
      this.selectedDescription = '';
      this.selectedPostLink = '';
  }


  onSelectTopHighlight(post: NewspaperPost){
    this.selectedHighlightStory.push({
      _id: post._id,
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      story: post.story,
      linkToPost : post.linkToPost,
      user: post.user,
    });
    this.saveSelected(this.CategoryHighlights, post._id)
  }

  submitEdition(){
    this.store.dispatch(updateStoriesForEdition({
     posts: this.assignedStories.filter(i => i.edition._id === this.currentEdition._id)
    }));
  }

  onSelectNewsBits(post: NewspaperPost){
    this.selectedNewsBits.push({
      _id: post._id,
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      story: post.story,
      linkToPost : post.linkToPost,
      user: post.user,
    });
    this.saveSelected(this.CategoryNewsBits, post._id)
  }

  onSelectNewsFeed(post: NewspaperPost){
    this.selectedNewsFeed.push({
      _id: post._id,
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      story: post.story,
      linkToPost : post.linkToPost,
      user: post.user,
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
      .subscribe( data => {
        this.selectedBannerImage=data;
        let story = this.selectedBannerStory.find( story => story._id === this.selectedStoryId);
        let newStory: NewspaperPost;
        if(story){
          newStory = Object.assign({}, story);
          newStory.imageId = this.selectedBannerImage;
          this.store.dispatch(updateStory(newStory));
        }

      });
  }

  saveSelected(category: StoryCategory, selectedStoryId:string = this.selectedStoryId){
    // console.log("button selected", this.selectedStoryId);
    this.store.dispatch(categorizeStories({
      newCategory: category,
      storyIds: [selectedStoryId],
      edition: this.currentEdition
    }));

  }

}
