import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/newspaper/models/newspaper-post';
import { AlertHelperService } from 'src/app/components/alert-helper.service';
import { FormBuilder, FormGroup, Validators, Form, NgForm, FormGroupDirective } from '@angular/forms';
import { PostService } from 'src/app/newspaper/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostFormGroup: FormGroup;
  @ViewChild(FormGroupDirective) frm;

  constructor(private postService: PostService,
    private formBuilder: FormBuilder,
    private alertHelper: AlertHelperService) { 
      this.createPostFormGroup = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        bannerImage: [''],
        linkToPost: ['', [Validators.required, Validators.pattern(/https?:\/\/(.*)/gi)] ]
      });
    }

  ngOnInit(): void {
  }

  get title(){
    return this.createPostFormGroup.get('title');
  }
  
  get description(){
    return this.createPostFormGroup.get('description');
  }

  get bannerImage(){
    return this.createPostFormGroup.get('bannerImage');
  }

  get linkToPostValue(){
    let value:string = this.createPostFormGroup.get('linkToPost').value;
    return value;
  }

  get author(): User{
    return {
      fullname: 'Vencki',
      twitterHandle: '@keertikotaru',
      userImageId: 'ny.jpg'
    }
  }

  submit(){
    if(this.createPostFormGroup.valid){
      this.postService.createPost({
        title: this.title.value,
        description: this.description.value,
        imageId: this.bannerImage?.value,
        linkToPost: this.linkToPostValue,
        user: this.author
      }).subscribe((result) => {
        if(result['_id']){
          this.reset();
          this.alertHelper.showAlertWithClose("Thank you for your contribution.");
        } else {
          this.alertHelper.showAlertWithClose("Something wrong! Post not created");
        }
      }, error =>  this.alertHelper.showAlertWithClose(`Something wrong! ${JSON.stringify(error)}`));
    } else {
      this.alertHelper.showAlertWithClose("Please provide correct values for the post");
    }
  }

  cancel() {
    this.reset();
  }
  
  private reset(){
    this.createPostFormGroup.reset();
    Object.keys(this.createPostFormGroup.controls).forEach(key => {
      this.createPostFormGroup.controls[key].setErrors(null)
    });
  }

}
