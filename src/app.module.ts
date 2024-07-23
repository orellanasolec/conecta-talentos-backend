import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante.module';
import { EstudianteService } from './estudiante.service';

@Module({
  imports: [EstudianteModule], 
  controllers: [AppController],
  providers: [AppService,EstudianteService],
})
export class AppModule {}
