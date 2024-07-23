import { Injectable } from '@nestjs/common';
import { Estudiante } from './Estudiante';

@Injectable()
export class EstudianteService {


    
    estudiantes:Estudiante[]=[new Estudiante(1,"Camilo","camilo@hola"),new Estudiante(2,"Samuel","samuel@hola"),new Estudiante(3,"Carlos","carlos@hola")];
    

    getEstudiantes():Estudiante[]{
     return this.estudiantes
    }

    getEstudiantesPorId(id:number):Estudiante{
        for (let index = 0; index < this.estudiantes.length; index++) {
            if(this.estudiantes[index].id==id){
              return this.estudiantes[index]
            }
            }
    }

    eliminarPorId(id:number):void{
        for (let index = 0; index < this.estudiantes.length; index++) {
            if(this.estudiantes[index].id==id){
               
                    console.log('Antes de eliminar:', this.estudiantes);
                    this.estudiantes.splice(index,1)
                    console.log('Después de eliminar:', this.estudiantes);
                  }
            }
          
          }
         


    cargarEstudiante(estudiante:Estudiante):void{
        for (let index = 0; index < this.estudiantes.length; index++) {
             if(estudiante.correo==this.estudiantes[index].correo){
                console.log("ya existe este estudiante")
                return;
            
        }

    
    }
    this.estudiantes.push(estudiante)
}}
