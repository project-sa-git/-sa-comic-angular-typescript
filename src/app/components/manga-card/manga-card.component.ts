import { Component, Directive, OnInit } from '@angular/core';
import * as constant from '../../../assets/data/constant';
import * as manga from '../../../assets/data/manga';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { PostService } from '../service/post-service';

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
    private http: HttpClient,
    private service: PostService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    console.log(this.service.getManga());

    // 「this.service.getManga()」は、
    // 「post-service.ts」でreturnしている「this.http.get(url, this.httpOptions)」
    // subscribeメソッドはhttpのメソッド
    this.service.getManga()
    .subscribe(data =>
      console.log(data)
      )
  }

  onClick() {
    console.log('test');
    this.http
    .get<any>("https://jsonplaceholder.typicode.com/todos/1")
    .subscribe((data) => {
      console.log(data)
    })
    .unsubscribe(); // subscribeで取り続けを止める　→　いらないかも
    
    // TODO .pipe catchError
    console.log('test');
  }
}
