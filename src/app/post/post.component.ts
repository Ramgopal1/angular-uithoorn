import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {https} from '@angular/https';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postForm: FormGroup;
  constructor() {}
  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required),
    });
  }
  onCreatePost() {
    console.log(this.postForm.value);
  }
}
