import { Component, OnInit } from '@angular/core';
import {UserResultModel} from "../user-result.model";
import {UserService} from "../user.service";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html'
})
export class UserListComponent{
  private users: UserResultModel[];

  constructor(private userService: UserService){
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
