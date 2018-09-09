import { Test, TestingModule } from '@nestjs/testing';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from '../service/ingredient.service';

describe('Ingredient Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [IngredientController],
      providers: [IngredientService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: IngredientController = module.get<IngredientController>(IngredientController);
    expect(controller.root()).toBe('Hello from Ingredient!');
  });
});
