import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { TestPage } from './pages/test/test.page';

const routes: Routes = [
  {
    path: '', component: HomePage, children: [
      {
        path: 'test',
        component: TestPage
      },
      { path: '', redirectTo: 'test', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
