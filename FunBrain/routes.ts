import {UserComponent} from "./src/app/user/user.component";
import {UserDetailsComponent} from "./src/app/users/user-details/user-details.component";
import {Routes} from "@angular/router";
import {UserEditComponent} from "./src/app/users/user-edit.component/user-edit.component";
import {UserListComponent} from "./src/app/users/user-list/user-list.component";
import {UserEditPage} from "./src/app/users/user-edit.page/user-edit.page";

export const appRoutes: Routes = [
  {path: '',  redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component:UserListComponent, pathMatch: 'full'},
  {path: 'usersold', component: UserComponent, pathMatch: 'full'},
  {path: 'edit-user/:id', component: UserEditPage, pathMatch: 'full'}
  // {path: 'edit-user/:id', component: UserEditComponent, pathMatch: 'full'}
  // {path: 'users/:id', component: UserDetailsComponent, pathMatch: 'full'},
  // {path: '', redirectTo: '/users', pathMatch: 'full'}
];
