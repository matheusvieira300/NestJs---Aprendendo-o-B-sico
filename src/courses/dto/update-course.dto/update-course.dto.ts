import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "../create-courses.dto/create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto) {  //como se fosse herança
    // readonly name?: string;//ao colocar uma ? interrogação o parâmetro se torna opcional
    
}
