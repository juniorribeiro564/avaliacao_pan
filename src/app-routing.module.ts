import { AuthGuard } from './uteis/auth-uteis';
import { ListRepoComponent } from './componente/paginas/lista-repo';
import { LoginComponent } from './componente/paginas/login-component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [

  {
    'path': '',
    component: LoginComponent
  },
  {
    'path': 'callback',
    component: LoginComponent
  },
  {
    'path': 'listagem',
    component: ListRepoComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
