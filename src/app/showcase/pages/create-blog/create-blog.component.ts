import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from 'src/app/showcase/pages/blogs/blogs.service';
import { AlertHelperService } from 'src/app/components/alert-helper.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  createPostFormGroup: FormGroup;
  avatars: string[] = [];
  banners: string[] = []

  constructor(private blogSvc: BlogsService,
    private formBuilder: FormBuilder,
    private alertHelper: AlertHelperService) { 
      this.createPostFormGroup = this.formBuilder.group({
        title: ['', Validators.required],
        story: ['', Validators.required],
        avatar: ['', Validators.required],
        bannerImage: [''],
        linkToPost: ['', [Validators.required, Validators.pattern(/https?:\/\/(.*)/gi)] ]
      });
    }

  ngOnInit(): void {
    this.blogSvc
      .getAllAvatars()
      .subscribe( re => {
        this.avatars = re;
        this.blogSvc
           .getAllBanners()
           .subscribe( re => this.banners = re);

      });

    
  }

  get title(){
    return this.createPostFormGroup.get('title');
  }

  get story(){
    return this.createPostFormGroup.get('story');
  }

  get avatar(){
    return this.createPostFormGroup.get('avatar');
  }

  get bannerImage(){
    return this.createPostFormGroup.get('bannerImage');
  }

  get linkToPostValue(){
    let value:string = this.createPostFormGroup.get('linkToPost').value;
    return value;
  }

  submit(){
    if(this.createPostFormGroup.valid){
      this.blogSvc.create({
        title: this.title.value,
        description: this.story.value,
        imageUrl: this.avatar.value,
        linkToBlog: this.linkToPostValue,
        bannerImage: this.bannerImage.value,
        dateAdded: new Date().toISOString()
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
