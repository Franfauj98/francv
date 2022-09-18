import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule)
  }, {
    path: 'about',
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule)
  }, {
    path: '**',
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
