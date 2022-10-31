import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaCardComponent } from './components/manga-card/manga-card.component';
import { MangaCardDetailComponent } from './components/manga-card-detail/manga-card-detail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: MangaCardComponent  // ルート
  },
  {
    path: 'manga-card-detail', component: MangaCardDetailComponent
  },
  {
    path: '**', component: PageNotFoundComponent  // それ以外の存在しないパス
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
