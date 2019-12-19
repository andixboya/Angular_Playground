import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FurnitureCreateComponent } from './furniture/furniture-create/furniture-create.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { FurnitureAllComponent } from './furniture/furniture-all/furniture-all.component';
import { FurnitureUserComponent } from './furniture/furniture-user/furniture-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'furniture/create', component: FurnitureCreateComponent },
  { path: 'furniture/details', component: FurnitureDetailsComponent },
  { path: 'furniture/all', component: FurnitureAllComponent },
  { path: 'furniture/user', component: FurnitureUserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }