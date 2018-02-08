import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {SearchServiceInjectables} from './user/search.service.injectables';
import {UserSearchService} from './user/user-search.service';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes} from '../../routes';
import {RouterModule} from '@angular/router';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {UserEditComponent} from './users/user-edit.component/user-edit.component';
import {UserService} from './users/user.service';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserEditPage} from './users/user-edit.page/user-edit.page';
import {UserCreatePage} from './users/user-create.page/user-create.page';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserCreatePage,
    UserEditPage,
    UserDetailsComponent,

    UserEditComponent

    // UserSearchService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [SearchServiceInjectables, UserSearchService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
