import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [{ path: 'login', component: LoginComponent }],
  },
  { path: 'settings', component: ConfigComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'config', component: ConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
