import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! 🚀 \n Please check http://localhost:3454/api for Swagger docs...';
  }
}
