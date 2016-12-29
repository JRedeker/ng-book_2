import {Component, OnInit, Input} from '@angular/core';
import {Article} from "../article";
import {ArticlesService} from "../articles.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticlesService]
})

export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];

  constructor(private articlesService: ArticlesService) {
    this.articlesService.getArticles();
    this.articles = this.articlesService.articles.subscribe(articles => this.articles = articles);
  }


  getArticles(): void {
    this.articles = this.articlesService.getArticles();
  }

  ngOnInit() {
    this.getArticles();
  }


}
