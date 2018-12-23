import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {



  

  constructor(private http: HttpClient) { }

  url: string ='articles/';

  findArticle(keyword, beginDate, endDate) {
    const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=";
    const APIKEY = "&api-key=d2e29213b6054f549f790d8b818c67eb";
    return this.http.get(`${BASEURL}${keyword}&begin_date=${beginDate}&end_date=${endDate}${APIKEY}`)
  }

  getSavedArticle() {
    return this.http.get(`${this.url}/api/articles`);
  }

  saveAnArticle(newArticle) {
    return this.http.post(`${this.url}/api/articles/add`, newArticle)
  }

  deleteSavedArticle(id) {
    return this.http.get(`${this.url}/api/articles/delete/${id}`);
  }
}
