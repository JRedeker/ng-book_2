import { Injectable } from '@angular/core';
import { Article } from './article';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {
  articles: articles;
  constructor(http:Http) {
    /**
    this.articles = [
      new Article('Angular', 'http://angular.io', 10),
      new Article('Fullstack', 'http://fullstack.io', 7)
    ]
     **/
    this.articles = http.get('api/articles.json').map(res => res.json());
  }

  getArticles() {
    return this.articles;
  }


  addArticle(title: string, link: string): void {
    this.articles.push(new Article(title, link, 1));
  }

}
