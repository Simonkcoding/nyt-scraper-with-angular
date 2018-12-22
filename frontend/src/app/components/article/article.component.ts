import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../../article.service'
import { NytArticle } from '../../nyt-article.model';
import { Article } from '../../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  searchForm: FormGroup;
  nytArticle: NytArticle[];



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
    this.articleService.findArticle(keyword, beginDate, endDate)
      .subscribe(
        res => {
          this.nytArticle = res.response.docs
        })
  }




  ngOnInit() {
  }

}
