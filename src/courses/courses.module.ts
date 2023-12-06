import { Module } from '@nestjs/common';
import { CoursesController } from './CoursesController';
import { CoursesService } from './courses.service';

@Module({
    controllers: [CoursesController],// para importar os módulos e organizar por aqui, módulo específico para isso
    providers: [CoursesService],
})
export class CoursesModule {}
