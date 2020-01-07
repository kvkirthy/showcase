import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  color1 = "skyblue";
  color2 = "#F4EAE8";
  color3 = "lightpink";
  color4 = "lightgreen";

  constructor() { }

  ngOnInit() {
  }

}
