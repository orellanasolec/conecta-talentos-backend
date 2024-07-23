import { Test, TestingModule } from '@nestjs/testing';
import { EstudiantclearController } from './estudiantclear.controller';

describe('EstudiantclearController', () => {
  let controller: EstudiantclearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudiantclearController],
    }).compile();

    controller = module.get<EstudiantclearController>(EstudiantclearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
