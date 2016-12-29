import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../articles.service";

@Component({
  selector: 'app-submit-article',
  templateUrl: './submit-article.component.html',
  styleUrls: ['./submit-article.component.css'],
  providers: [ArticlesService]
})
export class SubmitArticleComponent implements OnInit {
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articlesService.addArticle(title.value, link.value);
    // reset values
    title.value = '';
    link.value = '';
    return false;
  }

}
