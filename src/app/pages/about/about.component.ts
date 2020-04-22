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
  color5 = "#FEBDB0"

  introParagraph = "<i>I've</i> been in software development for over 17 years." + 
  "<br />I'm a three-time Microsoft MVP and the author of a two books, and several technology articles from Dot Net Curry and DNC magazine." + 
  "I hold a master's degree in software systems from the University of St. Thomas, Minneapolis and St. Paul, USA.";


  constructor() { }

  ngOnInit() {
  }

}
