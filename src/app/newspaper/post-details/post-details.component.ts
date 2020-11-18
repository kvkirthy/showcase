import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NewspaperPost } from '../models/newspaper-post';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: NewspaperPost) { }

  ngOnInit(): void {
    
  }

}
