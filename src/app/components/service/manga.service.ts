import { Injectable } from "@angular/core";
import * as manga from '../../../assets/data/manga';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() // @Injectableをつけるとserviceになる
export class MangaService {
  constructor(private http: HttpClient) { }

  // 関数に形式と型を付けられる。httpでくる形式はObservable＋any型を指定
  getManga():Observable<any> {
    console.log("MangaService経由してます");
    return this.http.get('http://localhost:3001/manga-card-detail')
  }
}
