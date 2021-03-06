import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'site',
    loadChildren: () => import('./module/site/site.module').then( m => m.SiteModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./module/authentication/authentication.module').then( m => m.AuthenticationModule)
  },
  {
    path: 'auth',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
