import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  loading: boolean;
  users: any;
    constructor(public http: Http) { }

    ngOnInit() { }

    private loadData(): boolean {
      console.log('Load data');

      this.loading = true;

      this.http.request('http://localhost:64884/api/users')
        .subscribe((res: Response) => {
        this.users = res.json();
        this.loading = false;
        console.log('Users', this.users);
      });

      return false;
    }

}
