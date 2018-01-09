import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component ({
  templateUrl: 'user-details.component.html'
})

export class UserDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    console.log('id', id);

  }

}
