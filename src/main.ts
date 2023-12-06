import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//que chama a criação da aplicação NestFactory.create() AppModule módulo principal da aplicação
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //para filtrar e tudo que for indesejado seja retirado
    forbidNonWhitelisted: true,//não permite envio de informação não listada, tipo novo parametro aleatório no Json
    transform: true //para definir automaticamente os dados que chegarem para o recurso courses e transformar automaticamente na DTO repassada
  })) // para utilizar o Validation Pipe
  await app.listen(3000);//para informar que a aplicação está rodando na porta 3000
}
bootstrap();
