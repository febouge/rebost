import { Test, TestingModule } from '@nestjs/testing';
import { RecipeIngredientController } from './recipeingredient.controller';
import { RecipeIngredientService } from '../service/recipeingredient.service';
import { RecipeIngredient } from '../entity/recipeingredient.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Unit } from '../../unit/entity/unit.entity';
import { Recipe } from '../../recipe/entity/recipe.entity';
import { Ingredient } from '../../ingredient/entity/ingredient.entity';

describe('RecipeIngredient Controller', () => {
  let recipeIngredientController: RecipeIngredientController;
  let recipeIngredientService: RecipeIngredientService;
  let mockRepository = {};
  const recipeIngredientMock: RecipeIngredient = {
    id: 1,
    quantity: 50,
    recipe: new Recipe(),
    unit: new Unit(),
    ingredient: new Ingredient(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [RecipeIngredientController],
      providers: [
        RecipeIngredientService,
        {
          provide: getRepositoryToken(RecipeIngredient),
          useValue: mockRepository,
        },
      ],
    }).compile();

    recipeIngredientService = module.get<RecipeIngredientService>(
      RecipeIngredientService,
    );
    recipeIngredientController = module.get<RecipeIngredientController>(
      RecipeIngredientController,
    );
  });

  describe('findAll', () => {
    it('should return an array of ingredients', async () => {
      const result = [recipeIngredientMock];
      jest
        .spyOn(recipeIngredientService, 'findAll')
        .mockImplementation(() => result);

      expect(await recipeIngredientController.findAll()).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete', async () => {
      const result = new DeleteResult();
      jest
        .spyOn(recipeIngredientService, 'delete')
        .mockImplementation(() => result);

      expect(await recipeIngredientController.delete(1)).toBe(result);
    });
  });

  describe('save', () => {
    it('should save', async () => {
      jest
        .spyOn(recipeIngredientService, 'save')
        .mockImplementation(() => recipeIngredientMock);

      expect(await recipeIngredientController.save(recipeIngredientMock)).toBe(
        recipeIngredientMock,
      );
    });
  });

  describe('find by id', () => {
    it('should return an ingredient', async () => {
      jest
        .spyOn(recipeIngredientService, 'getById')
        .mockImplementation(() => recipeIngredientMock);

      expect(await recipeIngredientController.getById(1)).toBe(
        recipeIngredientMock,
      );
    });
  });
});
