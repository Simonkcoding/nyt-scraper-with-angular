import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../../article.service'
import { NytArticle } from '../../nyt-article.model';
import * as moment from 'moment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  searchForm: FormGroup;
  nytArticle: NytArticle[];
  savedArticles:NytArticle[];

  constructor(private articleService: ArticleService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      keyword: ['', Validators.required],
      beginDate: '',
      endDate: ''
    })
  }

  searchArticle(keyword, beginDate, endDate) {
    beginDate = moment(beginDate).format('YYYY-MM-DD');
    endDate = moment(endDate).format('YYYY-MM-DD');
    this.articleService.findArticle(keyword, beginDate, endDate)
      .subscribe(
        res => {
          let docs = (<any>res).response.docs
          this.nytArticle = docs
        })
  }

  saveArticle(title,date,url){
    let newArticle ={
      title,
      date,
      url
    }
    this.articleService.saveAnArticle(newArticle)
    .subscribe(
      res=>{
        this.loadSavedArticles();
      }
    )
  }

  loadSavedArticles(){
    this.articleService.getSavedArticle()
    .subscribe(res=>
      this.savedArticles = res as NytArticle[])
  }

  deleteArticle(_id:string){
    this.articleService.deleteSavedArticle(_id)
        .subscribe(res => { 
          this.loadSavedArticles();
        })   
  }

  ngOnInit() {
    this.loadSavedArticles();
  }

}

