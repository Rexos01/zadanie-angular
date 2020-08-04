import { ListComponent } from './list/list/list.component';
import { GeneratedLandingPageComponent } from './generated-landing-page/generated-landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(module => module.ListModule)
  },
  {
    path: '',
    component: GeneratedLandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
