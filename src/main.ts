import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//que chama a criação da aplicação NestFactory.create() AppModule módulo principal da aplicação
  await app.listen(3000);
}
bootstrap();
