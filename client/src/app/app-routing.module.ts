import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list.component';
import { UserProfileComponent } from './users/user-profile.component';
import { AddUserComponent } from './users/add-user.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { AbilitiesInfoComponent } from './abilities-info/abilities-info.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/new', component: AddUserComponent},
  {path: 'users/:id', component: UserProfileComponent},
  {path: 'pokemon/:name', component: PokemonInfoComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'items/:name', component: ItemsDetailComponent},
  {path: 'abilities/:name', component: AbilitiesInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
