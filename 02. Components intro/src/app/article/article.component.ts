import { IArticle } from '../interfaces'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  //the article info will be taken from the below prop via input module
  //will have a default value it seems
  private symbols: number = 250;
  @Input() article: IArticle;
  @Input() articleDesc: string;

  descToShow: string;
  articleDescLen: number;

  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;


  imageIsShown: boolean = false;

  imageButtonTitle: string = "Show Image";

  ngOnInit() {
    this.articleDescLen = 0;
    this.descToShow = "";
  };


  readMore(): void {
    this.articleDescLen = this.articleDesc.length;
    this.showReadMoreBtn;
    this.showReadMoreBtn = false;
    this.showHideBtn = true;
    this.descToShow = this.article.description;
    this.articleDescLen = this.descToShow.length;
  };

  hideDesc(): void {
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
    this.descToShow = "";
    this.articleDescLen = 0;
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown == true ? "Hide Image" : "Show Image"
  }
}
