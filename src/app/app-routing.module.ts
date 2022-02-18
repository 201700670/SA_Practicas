import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentacionComponent } from './componente/presentacion/presentacion.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: '/',
    pathMatch: 'full'
  }, 
  {   path: '', 
    component: PresentacionComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
