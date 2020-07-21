import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/newspaper/models/newspaper-post';
import { AlertHelperService } from 'src/app/components/alert-helper.service';
import { FormBuilder, FormGroup, Validators, Form, NgForm, FormGroupDirective } from '@angular/forms';
import { CreatePostService } from 'src/app/newspaper/services/create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  images;
  createPostFormGroup: FormGroup;
  @ViewChild(FormGroupDirective) frm;

  constructor(private createPostService: CreatePostService,
    private formBuilder: FormBuilder,
    private alertHelper: AlertHelperService) { 
      this.createPostFormGroup = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        bannerImage: ['']
      });
    }

  ngOnInit(): void {
    this.createPostService.getBanners().subscribe(
      (result) => {
        this.images =result;
      }
    );
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

  get author(): User{
    return {
      fullname: 'Vencki',
      twitterHandle: '@keertikotaru',
      userImageId: 'ny.jpg'
    }
  }

  

  submit(){
    if(this.createPostFormGroup.errors?.length > 0){
      this.alertHelper.showAlertWithClose("Please provide correct values for the post");
    } else {
      this.createPostService.createPost({
        title: this.title.value,
        description: this.description.value,
        imageId: this.bannerImage?.value,
        user: this.author
      }).subscribe((result) => {
        if(result['_id']){
          this.reset();
          this.alertHelper.showAlertWithClose("Thank you for your contribution.");
        } else {
          this.alertHelper.showAlertWithClose("Something wrong! Post not created");
        }
      }, error =>  this.alertHelper.showAlertWithClose(`Something wrong! ${JSON.stringify(error)}`));
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
    // this.frm.resetForm();
  }

}
