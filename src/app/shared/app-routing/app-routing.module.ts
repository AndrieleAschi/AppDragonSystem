import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from 'src/app/details/details.component';
import { DragonsComponent } from 'src/app/dragons/dragons.component';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [

  { path: 'dragons', component: DragonsComponent, canActivate: [AuthGuardService] },
  { path: 'dragons/new', component: DetailsComponent, canActivate: [AuthGuardService]},
  { path: 'dragons/:id', component: DetailsComponent},
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}