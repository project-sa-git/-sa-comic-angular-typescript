import { Injectable } from "@angular/core";
import * as manga from '../../../assets/data/manga';

@Injectable() // @Injectableをつけるとserviceになる
export class MangaService {
  getManga() {
    console.log("MangaService経由してます");
    return manga
  }
}
