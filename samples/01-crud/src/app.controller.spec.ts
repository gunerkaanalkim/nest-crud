import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cats/cat.controller';
import { CatService } from './cats/cat.service';

describe('AppController', () => {
  let appController: CatController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService],
    }).compile();

    appController = app.get<CatController>(CatController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.findAll()).toBe('Hello World!');
    });
  });
});
