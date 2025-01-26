import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { CatalogoComponent } from './page/catalogo/catalogo.component';
import { RegistrazioneComponent } from './page/registrazione/registrazione.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'registrazione', component: RegistrazioneComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
