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
  color5 = "#FEBDB0";

  introParagraph = "<i>I've</i> passion for software solutioning and architecture." +
  "<br />As a technology leader I continue to provide guidance, help grow Architect Community and lead large development teams to deliver high quality software products." +
  "I hold a master's degree in software systems from the University of St. Thomas, Minneapolis and St. Paul, USA.";


  constructor() { }

  ngOnInit() {
  }

}
