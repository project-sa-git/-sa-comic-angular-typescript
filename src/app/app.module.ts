import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MangaCardComponent } from './components/manga-card/manga-card.component';
import { MangaCardDetailComponent } from './components/manga-card-detail/manga-card-detail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MangaService } from './components/service/manga.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MangaCardComponent,
    MangaCardDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MangaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
