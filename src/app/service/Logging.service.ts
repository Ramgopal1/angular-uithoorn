import { OnInit } from '@angular/core';

export class LoggingService implements OnInit {
  constructor() {}
  ngOnInit() {}
  logger(status: string) {
    console.log(status);
  }
}
