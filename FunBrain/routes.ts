import {UserComponent} from "./src/app/user/user.component";
import {UserDetailsComponent} from "./src/app/users/user-details/user-details.component";
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
];
