import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':param1/hello/:param2')
  getHello(
    @Param('param1') param1: string,
    @Param('param2') param2: string,
  ): string {
    return [param1, param2].toString();
  }
}
