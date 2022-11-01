import { Component, Directive, OnInit } from '@angular/core';
import * as constant from '../../../assets/data/constant';
import * as manga from '../../../assets/data/manga';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss'],
})
export class MangaCardComponent implements OnInit {
  title = 'angular-study';
  text: string = 'トグルボタン未選択';
  manga: any = manga;

  constructor(
    private http: HttpClient
    // TODO errorService追加
  ) {
  }

  ngOnInit(): void {
    console.log(constant.COLS);
    console.log(constant.ROWS);
    console.log(manga.data);
    console.log(manga);
  }

  onClick() {
    console.log('test');
    this.http
      .get<any>("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe((data) => {
        console.log(data);
      })
      .unsubscribe(); // subscribeで取り続けを止める

      // TODO .pipe catchError
  }
}
