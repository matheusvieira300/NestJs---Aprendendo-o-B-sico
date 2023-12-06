import { IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()//para dizer que precisa ser string o dado
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsString({each: true})//para validar cada string do array
    readonly tags: string[];
}
