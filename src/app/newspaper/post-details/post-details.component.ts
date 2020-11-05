import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NewspaperPost } from '../models/newspaper-post';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: NewspaperPost) { }

  ngOnInit(): void {
    
  }

}
