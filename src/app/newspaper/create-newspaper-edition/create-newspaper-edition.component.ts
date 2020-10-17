import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertHelperService } from 'src/app/components/alert-helper.service';
import { NewspaperEdition } from '../models/editions';
import { EditionService } from '../services/edition.service';

@Component({
  selector: 'app-create-newspaper-edition',
  templateUrl: './create-newspaper-edition.component.html',
  styleUrls: ['./create-newspaper-edition.component.css']
})
export class CreateNewspaperEditionComponent implements OnInit {

  createNpeFormGroup: FormGroup;
  selectedEdition: NewspaperEdition;
  @Input('editions') editionsList: NewspaperEdition[];

  constructor(
    private formBuilder: FormBuilder,
    private editionService: EditionService,
    private alertHelper: AlertHelperService
  ) { }

  ngOnInit(): void {
    this.createNpeFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get title(){
    return this.createNpeFormGroup.get('title');
  }
  
  get description(){
    return this.createNpeFormGroup.get('description');
  }

  get dateCreated(){
    return this.createNpeFormGroup.get('dateCreated');
  }

  get isPublished(){
    return this.createNpeFormGroup.get('isPublished');
  }

  showSelectedEdition($event){
    this.selectedEdition = this.editionsList.find(i => i._id === $event.value);
  }

  submit(){
    if(this.createNpeFormGroup.valid){
      this.editionService.create({
        title: this.title.value,
        description: this.description.value,
        dateCreated: new Date(),
        isPublished: false
      }).subscribe(() => {
        this.alertHelper.showAlertWithClose("Created a new edition");
      });
    } else {
      this.alertHelper.showAlertWithClose("Please provide correct values for the post");
    }

  }

  cancel(){

  }

}
