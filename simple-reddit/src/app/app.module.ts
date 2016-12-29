import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { SubmitArticleComponent } from './submit-article/submit-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import {ArticlesService} from "./articles.service";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SubmitArticleComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
