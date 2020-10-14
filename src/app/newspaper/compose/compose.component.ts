import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { getAllStories } from '../ngrx/story.actions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { getStories } from 'src/app/newspaper/ngrx/story.selectors';
import { NewspaperPost, NewspaperPosts } from 'src/app/newspaper/models/newspaper-post';
import { ImagePickerComponent } from 'src/app/newspaper/image-picker/image-picker.component';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  availableStories = new NewspaperPosts();
  selectedHighlightStory = new Array<NewspaperPost>();
  selectedNewsBits = new Array<NewspaperPost>();
  selectedNewsFeed = new Array<NewspaperPost>();
  selectedTitle : string;
  selectedDescription : string;
  selectedBannerImage : string;
  selectedPostLink : string;

  @ViewChild("stepper") stepper: MatHorizontalStepper;

  constructor(private dialog: MatDialog, 
    private store: Store){ }

  ngOnInit(): void {
    this.store.select(getStories).subscribe( (data) => {
      console.log("selector --> ", data);
      this.availableStories = data;
    });
    // this.store.pipe(select(getStories)).subscribe( (data) => {
    //   console.log("selector --> ", data);
    //   this.availableStories = data;
    // });
    this.store.dispatch(getAllStories());
    // this.postService
    //   .getActiveStories()
    //   .subscribe( result => {
    //     console.log(result);
    //     this.availableStories = result;
    //   });
  }

  onSelectTopBanner(post: NewspaperPost){
    this.showPreview(post);
  }

  showPreview(post: NewspaperPost){
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
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      linkToPost : post.linkToPost,
      user: post.user
    });
  }

  onSelectNewsBits(post: NewspaperPost){
    this.selectedNewsBits.push({
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      linkToPost : post.linkToPost,
      user: post.user
    });
  }

  onSelectNewsFeed(post: NewspaperPost){
    this.selectedNewsFeed.push({
      title : post.title,
      imageId : post.imageId,
      description : post.description,
      linkToPost : post.linkToPost,
      user: post.user
    });
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

}
