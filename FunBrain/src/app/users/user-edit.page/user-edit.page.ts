import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: 'user-edit.page.html'
})
export class UserEditPage {

  private userName: string;
  private email: string;

  constructor(){
    this.userName = 'user name';
  }
}
