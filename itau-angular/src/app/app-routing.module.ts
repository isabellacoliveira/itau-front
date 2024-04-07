import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      // canActivate: [LoginGuardService]
    },
    {
      path: 'form',
      component: FormComponent,
      // canActivate: [LoginGuardService]
    },
    {
      path: 'favorites',
      component: FavoritesComponent,
      // canActivate: [LoginGuardService]
    },
  //   {
  //   path: 'login',
  //   component: LoginContainerComponent,
  //   canActivate: [LoginGuardService],
  //   children: [
  //     {
  //       path: '',
  //       component: LoginComponent,
  //       canActivate: [LoginGuardService]
  //     },
  //     {
  //       path: 'redefinir-senha',
  //       component: RedefinirSenhaComponent,
  //       canActivate: [LoginGuardService]
  //     },
  //     {
  //       path: 'redefinir-senha/concluir',
  //       component: ConcluirRedefinirSenhaComponent,
  //       canActivate: [LoginGuardService]
  //     }
  //   ],
  //   data: {
  //     autorizacaoNecessaria: 'rotaLogin'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
