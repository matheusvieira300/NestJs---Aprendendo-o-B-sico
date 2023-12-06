import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

//tudo abaixo das chaves é um Decorator/Anottation
@Module({
  imports: [CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} //quando criado um módulo pelo cli ele é incluído automaticamente no app module
