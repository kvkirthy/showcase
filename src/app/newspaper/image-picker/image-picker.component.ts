import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/newspaper/services/post.service';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.css']
})
export class ImagePickerComponent implements OnInit {

  images;

  constructor(private postService: PostService, 
    private dialogRef: MatDialogRef<ImagePickerComponent>) { }

  ngOnInit(): void {
    this.postService
      .getBanners()
      .subscribe((result) => {
        this.images =result;
      });
  }

  onImageClick(img){
    this.dialogRef.close(img);
  }

  close(){
    this.dialogRef.close();
  }

}
