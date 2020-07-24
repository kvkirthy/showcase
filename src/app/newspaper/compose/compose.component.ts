import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { PostService } from 'src/app/newspaper/services/post.service';
import { NewspaperPost } from 'src/app/newspaper/models/newspaper-post';
import { ImagePickerComponent } from 'src/app/newspaper/image-picker/image-picker.component';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  allStories = new Array<NewspaperPost>();
  selectedHighlightStory = new Array<NewspaperPost>();
  selectedNewsBits = new Array<NewspaperPost>();
  selectedNewsFeed = new Array<NewspaperPost>();
  selectedTitle : string;
  selectedDescription : string;
  selectedBannerImage : string;
  selectedPostLink : string;

  @ViewChild("stepper") stepper: MatHorizontalStepper;

  constructor(private dialog: MatDialog, private postService: PostService){ }

  ngOnInit(): void {
    this.postService
    .getActiveStories()
    .subscribe( result => this.allStories = result);
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
