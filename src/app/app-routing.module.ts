import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './UI/pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './UI/pages/auth/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    loadChildren: () =>
      import('./UI/pages/router-control.module').then(
        (m) => m.RouterControlModule
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
