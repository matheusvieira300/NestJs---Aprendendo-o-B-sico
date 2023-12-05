import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';


@Controller('courses') //endpoint da controller igual no java

export class CoursesController {

    constructor(private readonly coursesService: CoursesService) {
    }

    // @Get()
    // findAll() { //método
    //     return 'Listagem de cursos';
    // }
    //segunda versão
    // @Get()
    // findAll(@Res() response) { //response para enviar a resposta e editar o código http
    //     return response.status(200).send('Listagem de cursos');//igual no java 
    // }
    //terceira versão
    @Get()
    findAll() {
        return this.coursesService.findall(); //igual no java 
    }


    // @Get(':id')//o dois pontos indica pro nest que queremos pegar um pârametro na rota, o nome aqui não tem importância o que importa é ser chamado no params
    // findOne(@Param('id') params) {//Param é uma lista de pârametros, 
    //     return `Curso #${params.id}`;//para poder usa váriavel javascript dentro da String ${},lembrar que tem que usar um tipo de aspas muito específico
    // }
    // segunda versão
    // @Get(':id')
    // findOne(@Param('id') id: String) {
    //     return `Curso #${id}`;
    // }
    //terceira versão
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coursesService.findOne(id);//repassando o id a ser localizado
    }

    // @Post()
    // create(@Body() body){//body objeto que vai conter todos os dados a ser enviados, ele é tipo o @ModelAttribute do java
    //     return body;// o body que está sendo enviado é o que vai ser devolvido
    // }
    //segunda versão
    // @Post()
    // @HttpCode(HttpStatus.NO_CONTENT)//HttpStatus um ENUM do nest para utilizar o código http referente aquela requisição no caso 204 no content
    // create(@Body() body){//o que for colocado entre parênteses no Body indica ao nest que ele irá trata apenas aquele atributo ignorando o restante
    //     return body;
    // }

    //terceira versão
    @Post()
    create(@Body() body) {
        return this.coursesService.create(body);//responsável por criar o objeto
    }

    //Método para atualização
    // @Patch(':id')
    // update(@Param('id') id: String, @Body() body){//pegando o id e o corpo da requisição
    //     return `Atualização do Curso #${id}`;
    // }

    //segunda versão
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coursesService.update(id, body);//passando o id a ser atualizado e o novo body/corpo da requisição
    }


    // @Delete(':id')
    // remove(@Param('id') id: String) {
    //     return `Exclusão do Curso #${id}`;
    // }

    //segunda versão
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coursesService.remove(id);//passando o id a ser excluído
    }

}
