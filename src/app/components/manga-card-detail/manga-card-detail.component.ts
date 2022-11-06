import { Component, OnInit } from '@angular/core';
import { MangaService } from '../service/manga.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manga-card-detail',
  templateUrl: './manga-card-detail.component.html',
  styleUrls: ['./manga-card-detail.component.scss']
})
export class MangaCardDetailComponent implements OnInit {
  manga: any

  constructor(
    private mangaService: MangaService
  ) { }

  ngOnInit(): void {
    this.manga = this.mangaService.getManga()

    // 観測対象「observable」を記述
    const observable = new Observable((subscriber) => {
      subscriber.next(1); // nextでデータを放出している
      subscriber.next(2);
      subscriber.error();
      setTimeout(() => {  // 1s間待ってからnext4を放出
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    // debugger

    console.log('just before subscribe');
    observable.subscribe({
      next(data) {
        console.log('次のデータが出力 ' + data);
      },
      error(err) {
        console.error('次のエラーが発生: ' + err);
      },
      complete() {
        console.log('完了！');
      },
    });
    console.log('subscribeから抜けました');
  }

}
