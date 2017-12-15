import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {SearchServiceInjectables} from './user/search.service.injectables';
import {UserSearchService} from "./user/user-search.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
    // UserSearchService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SearchServiceInjectables, UserSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
