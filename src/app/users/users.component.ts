import { UserComponent } from './../user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../service/Logging.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [LoggingService],
})
export class UsersComponent implements OnInit {
  constructor(private logData: LoggingService) {}
  usersList = [];
  updatedName: string;
  ngOnInit(): void {}
  onUserAdded(event: string) {
    this.usersList.push(event);
  }
  updateName() {
    this.updatedName = 'My updated name is Rajesh';
    this.logData.logger('I am in users component');
  }
  // addUser(){
  //   this.usersList.push(this.userName);
  // }
}
