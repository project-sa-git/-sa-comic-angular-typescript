import { Component, OnInit } from '@angular/core';
import { MangaService } from '../service/manga.service';
// import * as manga from '../../../assets/data/manga'
// import { data } from '../../../assets/data/manga';

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
  }

}
