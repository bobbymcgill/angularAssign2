import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = '';
  userResetEnable = false;

  constructor() { }

  ngOnInit() {
  }

  userChange(){
    this.userResetEnable = true;
    
  }

resetUser(){
    this.userName = '';
    this.userResetEnable = false;
    //app-UsernameComponent.
  }
}
