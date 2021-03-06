import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SitePage } from './site.page';
import { CardPage } from './pages/card/card.page';

const routes: Routes = [
  {
    path: '', component: SitePage, children: [
      {
        path: 'card',
        component: CardPage
      },
      { path: '', redirectTo: 'card', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {}
