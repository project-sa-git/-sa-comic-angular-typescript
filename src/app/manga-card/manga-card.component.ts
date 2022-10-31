import { Component, OnInit } from '@angular/core';
import * as constant from '../data/constant';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss']
})
export class MangaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(constant.COLS);
    console.log(constant.ROWS);
  }

}
