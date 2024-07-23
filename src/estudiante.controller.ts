import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Estudiante } from './Estudiante';
import { EstudianteService } from './estudiante.service';

@Controller('estudiante')
export class EstudianteController {

    constructor(private readonly estudianteService:EstudianteService){

    }


    @Get()
    get():Estudiante[]{
       return this.estudianteService.getEstudiantes()
    }

    @Get(":id")
    getPorId(@Param('id')id:number):Estudiante|undefined{
      return this.estudianteService.getEstudiantesPorId(id);
    }

    @Delete(':id')
     eliminarEstudiante(@Param('id')id:number):void{
          this.estudianteService.eliminarPorId(id)

        }


    @Post()
    crearEstudiante(@Body() estudiante:Estudiante) :void{
       
        this.estudianteService.cargarEstudiante(estudiante);
    } 
    












}

