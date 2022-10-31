import { Component, Directive, OnInit } from '@angular/core';
import * as constant from '../../../assets/data/constant';
import * as manga from '../../../assets/data/manga';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss'],
})
export class MangaCardComponent implements OnInit {
  title = 'angular-study';
  text: string = 'トグルボタン未選択';
  manga: any = manga;

  constructor() {}

  ngOnInit(): void {
    console.log(constant.COLS);
    console.log(constant.ROWS);
    console.log(manga.data);
    console.log(manga);
  }

  onClick() {
    alert('ボタン');
  }
}
