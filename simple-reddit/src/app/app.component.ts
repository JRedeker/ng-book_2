import { Component } from '@angular/core';
import {SubmitArticleComponent} from "./submit-article/submit-article.component";
import {ArticleComponent} from "./article/article.component";
import {ArticlesService} from "./articles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SubmitArticleComponent, ArticleComponent]
})
export class AppComponent {
  title = 'Angular 2 Reddit Clone';
  constructor(private articlesService: ArticlesService) {}
}
