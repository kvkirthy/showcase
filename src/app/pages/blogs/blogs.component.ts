import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';

let mockBlogResponse: Array<Blog> =[
  {
    title:"Dynamic Import() in JavaScript",
    description: "Discuss native support for on-the-fly import of modules in ES 2020 (also called ES 11). Towards the end, a quick description of how JavaScript features are standardized and implemented by various browsers.",
    imageUrl: "https://miro.medium.com/max/2000/1*ibQ7bd0wnGLXY3jMlhpgYA.jpeg",
    linkToBlog: "https://medium.com/@kvkirthy/discuss-native-support-for-on-the-fly-import-of-modules-in-es-2020-also-called-es-11-ad4f899e0c2",
    isHighlighted: true
  },  
  {
    title:"Memoization with Selectors in NgRx",
    description: "The prior article on Memoization in JavaScript discusses caching results of a long running JavaScript function. Majority of the functions that run in a browser finish fairly quickly, return in milliseconds. That begs the question, what are the real-world use cases for memoization in JavaScript? This article describes one such use case.",
    imageUrl: "https://miro.medium.com/max/1400/1*jX76ElYc3BXOUhvVqPQa_g.jpeg",
    linkToBlog: "https://medium.com/@kvkirthy/memoization-with-selectors-in-ngrx-c60e67a08161",
    isHighlighted: false
  },
  {
    title:"Memoization - JavaScript",
    description: "This article describes memoization in JavaScript. We begin with basics. The article elaborates memoization technique with a simple example.",
    imageUrl: "https://miro.medium.com/max/1000/1*sqvl0IJngpf5k6UHtNKDYg.jpeg",
    linkToBlog: "https://medium.com/@kvkirthy/memoization-51d35ac2a3cf",
    isHighlighted: false
  },
  {
    title:"Building Single Page Applications (SPA) with Angular Router",
    description: "Routing is an important aspect of building a SPA (Single Page Application). In this two-part Basic to Advanced tutorial on Angular Routing, we will discuss all the important components required to implement routing in your applications",
    imageUrl: "https://angular.io/assets/images/logos/angular/angular.png",
    linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1467",
    isHighlighted: false
  },
  {
    title:"Angular Evolution - Version 1.x to 6",
    description: "This Angular tutorial summarizes the evolution process of the Angular.js framework. It attempts to look back at the original context of Angular application development and how it has progressed. It covers Angular 1.x, v2, v4, v5 and Angular version 6",
    imageUrl: "https://www.dotnetcurry.com/images/angular/versions/angular-evolution.jpg",
    linkToBlog: "https://www.dotnetcurry.com/angularjs/1453/angular-evolution-versions-1-to-6",
    isHighlighted: false
  },  {
    title:"Angular HttpClient Deep Dive (Headers, HTTP events, non-JSON data and Interceptors)",
    description: "Explore advanced scenarios with the HTTP Client in Angular. In this tutorial, we add headers and parameters to the request, access the response object, work with the HTTPEvent, and look at Interceptors in Angular.",
    imageUrl: "https://angular.io/generated/images/marketing/concept-icons/http.png",
    linkToBlog: "https://www.dotnetcurry.com/angularjs/1448/angular-http-client-interceptors-headers-event",
    isHighlighted: false
  },  {
    title:"Getting Started with HTTP Client in Angular (GET, POST, PUT, DELETE methods)",
    description: "Learn the basics of making HTTP calls over GET/POST/PUT/DELETE methods in an Angular application. Also explore error handling scenarios and solutions for separating presentation logic from service API integration details.",
    imageUrl: "https://angular.io/generated/images/marketing/concept-icons/http.png",
    linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1438",
    isHighlighted: false
  },  {
    title:"ES8 (or ES2017) – What’s New in JavaScript?",
    description: "ES8 or ES2017 is the eighth version of the JavaScript language specification created to offer new features and ways of working with JavaScript. This article talks about the new features in ES8/ES 2017.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1405",
    isHighlighted: false
  },  {
    title:"Angular 4 Development Cheat Sheet",
    description: "This Angular cheat sheet is a quick reference to get you going with Angular development. It uses Angular v4 with TypeScript.",
    imageUrl: "https://angular.io/assets/images/logos/angular/angular_solidBlack.png",
    linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1385",
    isHighlighted: false
  },  {
    title:"Angular 4 application development with Bootstrap 4 and TypeScript",
    description: "In this tutorial, we will explore how to develop an Angular 4 application using TypeScript. We will also explore Angular 4 New Features, Angular CLI, as well as differences between Angular v2 vs 4 application development.",
    imageUrl: "https://pluspng.com/img-png/bootstrap-logo-vector-png-bootstrap-logo-512.jpg",
    linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1366",
    isHighlighted: false
  },  {
    title:"Ionic 2 Tutorial - Building a hybrid mobile app using Angular",
    description: "The Ionic framework is one of the most popular hybrid mobile application frameworks. This tutorial focuses on building a simple hybrid app using Ionic 2, Angular 2 and TypeScript.",
    imageUrl: "https://media-exp1.licdn.com/dms/image/C510BAQHe0GgjFhdIBQ/company-logo_200_200/0?e=2159024400&v=beta&t=7jQ06NmrITyrCAlQsbpeQwXlwXiUV-Nqtw1m9UQd3Ho",
    linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1355",
    isHighlighted: false
  },  {
    title:"Angular V4 (or) call it just Angular",
    description: "This blog is a high level gist of Angular 4 features. For detailed explanation refer to my article in DNC magazine. Article is titled \"Angular 4 application development with Bootstrap 4 and TypeScript\". Follow this link to download the magazine for free.",
    imageUrl: "https://angular.io/generated/images/marketing/concept-icons/animations.png",
    linkToBlog: "http://venckicode.blogspot.com/",
    isHighlighted: false
  },  {
    title:"CSS and styling options in ReactJS",
    description: "ReactJS provides multiple options for styling components. We might use traditional approach to have a style-sheet in the project; Then apply CSS classes for elements in the component. Or we might pick a contentious approach to code styles within the component.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkToBlog: "http://venckicode.blogspot.com/2017/01/css-and-styling-options-in-reactjs.html",
    isHighlighted: false
  },  {
    title:"Using Flow types with React components",
    description: "Continuing series on Flow, in this blog I'm writing about Flow with React. It details advantages of using Flow while building React components.",
    imageUrl: "https://pbs.twimg.com/profile_images/889697663087542272/7mfszmjJ_400x400.jpg",
    linkToBlog: "http://venckicode.blogspot.com/2016/12/getting-started-with-react-component.html",
    isHighlighted: false
  },  {
    title:"Working with Flow on Visual Studio Code",
    description: "Blog describes what I believe is an optimal development setup with Flow. It details using Visual Studio Code IDE with Flow.",
    imageUrl: "https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png",
    linkToBlog: "http://venckicode.blogspot.com/2016/12/optimizing-flow-using-it-with-vs-code.html",
    isHighlighted: false
  },  {
    title:"Getting started with AngularFire 2",
    description: "The blog describes using AngularFire2, Angular 2 and TypeScript API for Firebase. It is a beginner guide with a sample for retrieval and update to Firebase database.",
    linkToBlog: "http://venckicode.blogspot.com/2016/10/getting-started-with-angularfire-2_65.html",
    imageUrl: "https://img.icons8.com/color/480/firebase.png",
    isHighlighted: false
  }

];

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogList$: Observable<Array<Blog>>;
  highlightedBlog: Blog;
  constructor() { }

  ngOnInit() {
    let allBlogs = mockBlogResponse;
    this.highlightedBlog = allBlogs.find(i => i.isHighlighted);
    this.blogList$ = of(allBlogs.filter(i => !i.isHighlighted ));
  }

  cardClickHandler(linkToBlog){
    window.open(linkToBlog, "__blog");
  }

}
