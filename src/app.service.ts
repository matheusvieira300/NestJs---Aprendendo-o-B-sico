import { Injectable } from '@nestjs/common';

@Injectable()//tipo o @Component do Java pra reconhecer no Spring a classe
//@Injectable Defini o Decorator como Serviço
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
