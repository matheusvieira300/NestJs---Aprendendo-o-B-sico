import { Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';

@Injectable()//para configurar a injeção de dependência
export class CoursesService {
    private courses: Course[] = [//array de Course
        {
            id: 1,
            name: "Fundamentos do framework NestJS",
            description: "Fundamentos do framework NestJS",
            tags: ["node.js", "nestjs", "javascript"],
        },
    ];// array de course

    findall() {
        return this.courses;//para retornar todos os registros do courses
    }

    findOne(id: string) {//para procurar um id igual o que for passado no método, porém aqui o id é uma string e o id de courses é um number
        return this.courses.find((course: Course) => course.id == Number(id))//operação de busca, efetuada conversão de id string para number
    }

    create(createCourseDto: any) {//data transfer object para criação e atualização
        this.courses.push(createCourseDto);//push incluir no array a estrutura enviada
    }

    update(id: string, updateCourseDTO: any) {//id e informações a serem atualizadas
        const indexCourse = this.courses.findIndex((course: Course) => course.id == Number(id));//para verificar o course que é igual ao course de mesmo id, ver posição

        this.courses[indexCourse] = updateCourseDTO;//course na posição indexcourse e updateCourseDto para atualizar
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id == Number(id),
        );//para pegar a posição para realizar exclusão

        if(indexCourse >= 0){// caso ele não consiga encontrar o course ele fica como -1 o retorno esse if é para garantir que ele encontre o course
        this.courses.splice(indexCourse, 1);//esquerda o caminho a direita a exclusão 1
    }
    }
}
