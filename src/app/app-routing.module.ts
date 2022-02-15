import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouterLinks } from './enums/router-links';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: RouterLinks.news,
},{
  path: RouterLinks.news,
  loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
}, {
  path: RouterLinks.info,
  loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
