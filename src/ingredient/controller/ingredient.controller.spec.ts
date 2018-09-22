import { Test, TestingModule } from '@nestjs/testing';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from '../service/ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Ingredient Controller', () => {
  let module: TestingModule;
  let ingredientController: IngredientController;
  let ingredientService: IngredientService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [IngredientController],
      providers: [IngredientService],
      components:  [{
        provide: 'ingredientRepository',
        useClass: Repository,
      }]
    }).compile();

    ingredientService = module.get<IngredientService>(IngredientService);
    ingredientController = module.get<IngredientController>(IngredientController);
  });
  it('Get ingredient', async () => {
    const result = new Ingredient();
    result.id = 1
    jest.spyOn(ingredientService, 'getById').mockImplementation(id => result);
    expect(await ingredientController.getIngredient(1)).toBe('Hello from Ingredient!');
  });
});
