import {UserComponent} from "./src/app/user/user.component";
import {UserDetailsComponent} from "./src/app/users/user-details/user-details.component";
import {Routes} from "@angular/router";
import {UserEditComponent} from "./src/app/users/user-edit.component/user-edit.component";

export const appRoutes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'edit-user', component: UserEditComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
];
