import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  private userName: string;
  constructor(private route:ActivatedRoute) {
    this.userName = 'user';
  }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    console.log('id', id);
  }

}

