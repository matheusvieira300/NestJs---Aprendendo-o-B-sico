import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//Anottation igual no java para controller, aqui o nome disso é Decorator
export class AppController {
  constructor(private readonly appService: AppService) {}//método construtor criando um objeto do Tipo App.service.ts

  @Get()//igual getMapping
  getHello(): string {
    return this.appService.getHello();
  }
}
