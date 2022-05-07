import { UserComponent } from './../user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}
  usersList = [];
  ngOnInit(): void {}
  onUserAdded(event: string) {
    this.usersList.push(event);
  }
  // addUser(){
  //   this.usersList.push(this.userName);
  // }
}
