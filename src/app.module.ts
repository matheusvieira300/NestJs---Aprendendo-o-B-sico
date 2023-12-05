import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/CoursesController';
import { CoursesService } from './courses/courses.service';

//tudo abaixo das chaves é um Decorator/Anottation
@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {} //quando criado um módulo pelo cli ele é incluído automaticamente no app module
