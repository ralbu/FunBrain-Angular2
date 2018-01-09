import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {SearchServiceInjectables} from './user/search.service.injectables';
import {UserSearchService} from "./user/user-search.service";
import {HttpClientModule} from "@angular/common/http";
import {appRoutes} from "../../routes";
import {RouterModule} from "@angular/router";
import {UserDetailsComponent} from "./users/user-details/user-details.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent

    // UserSearchService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchServiceInjectables, UserSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
