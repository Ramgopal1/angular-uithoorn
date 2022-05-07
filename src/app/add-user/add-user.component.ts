import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  // userName: string;
  // userList = [];
  @Output() userAdded = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}

  @ViewChild('userInput') userInput: ElementRef;
  onUserAdded() {
    this.userAdded.emit(this.userInput.nativeElement.value);
    // console.log(this.userInput.nativeElement.value);
  }
}
