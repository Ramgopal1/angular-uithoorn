export class LoggingService {
  logger(msg: any) {
    console.log(msg);
  }
  error(msg: any) {
    console.error(msg);
  }
  warn(msg: any) {
    console.warn(msg);
  }
  validation(msg: any) {
    console.log('check value of field');
  }
}
