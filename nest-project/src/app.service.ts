import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  name = 'alex';
  firstName = 'asfasf';

  getHello(): string {
    console.log(12345);
    return 'Hello World!';
  }
}


