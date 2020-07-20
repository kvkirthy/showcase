import { Component, OnInit } from '@angular/core';
import { CreatePostService } from 'src/app/newspaper/services/create-post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  images;
  createPostFormGroup: FormGroup;
  constructor(private createPostService: CreatePostService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createPostService.getBanner().subscribe(
      (result) => {
        this.images =result;
      }
    );

    this.createPostFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      bannerImage: ['']
    });
  }

}
