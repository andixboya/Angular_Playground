import { IArticle } from '../interfaces'
import { ArticleData } from '../data/data'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }
  articles: IArticle[];

  ngOnInit() {
    //this will fill in the articles in the above collection
    this.articles = new ArticleData().getData();
  }

}
