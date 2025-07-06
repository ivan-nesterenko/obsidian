import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get("getSettings")
  getData() {
    return {ok: true, data: "No settings found"};
  }
}
