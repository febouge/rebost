import { RecipeIngredientService } from './recipeingredient.service';
import { RecipeIngredient } from '../entity/recipeingredient.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Unit } from '../../unit/entity/unit.entity';
import { Ingredient } from '../../ingredient/entity/ingredient.entity';
import { Recipe } from '../../recipe/entity/recipe.entity';

describe('RecipeIngredientService', () => {
  const recipeingredient: RecipeIngredient = {
    id: 1,
    quantity: 50,
    recipe: new Recipe(),
    unit: new Unit(),
    ingredient: new Ingredient()
  };
  const deleteResult: DeleteResult = {
    raw: null
  };
  let findResult = [recipeingredient];
  let recipeingredientService: RecipeIngredientService;
  let mockRepository = {
    find: () => findResult,
    findOne: () => recipeingredient,
    save: () => recipeingredient,
    delete: () => deleteResult
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RecipeIngredientService,
        {
          provide: getRepositoryToken(RecipeIngredient),
          useValue: mockRepository,
        }
      ],
    }).compile();

    recipeingredientService = module.get<RecipeIngredientService>(RecipeIngredientService);
  });

  describe('findAll', () => {
    it('should return an array of recipeingredients', async () => {
      expect(await recipeingredientService.findAll()).toBe(findResult);
    });
  });

  describe('getById', () => {
    it('should return an recipeingredient', async () => {
      expect(await recipeingredientService.getById(1)).toBe(recipeingredient);
    });
  });

  describe('save', () => {
    it('should save an recipeingredient', async () => {
      expect(await recipeingredientService.save(recipeingredient)).toBe(recipeingredient);
    });
  });

  describe('delete', () => {
    it('should delete an recipeingredient', async () => {
      expect(await recipeingredientService.delete(1)).toBe(deleteResult);
    });
  });
});
