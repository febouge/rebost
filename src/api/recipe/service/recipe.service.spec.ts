import { RecipeService } from './recipe.service';
import { Recipe } from '../entity/recipe.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('RecipeService', () => {
  const recipe: Recipe = {
    id: 1,
    name: 'Test recipe',
    instructions: 'Just add this test to a bowl',
    recipeIngredients: [],
    tags: [],
  };
  const deleteResult: DeleteResult = {
    raw: null,
  };
  let findResult = [recipe];
  let recipeService: RecipeService;
  let mockRepository = {
    find: () => findResult,
    findOne: () => recipe,
    save: () => recipe,
    delete: () => deleteResult,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RecipeService,
        {
          provide: getRepositoryToken(Recipe),
          useValue: mockRepository,
        },
      ],
    }).compile();

    recipeService = module.get<RecipeService>(RecipeService);
  });

  describe('findAll', () => {
    it('should return an array of recipes', async () => {
      expect(await recipeService.findAll()).toBe(findResult);
    });
  });

  describe('getById', () => {
    it('should return an recipe', async () => {
      expect(await recipeService.getById(1)).toBe(recipe);
    });
  });

  describe('save', () => {
    it('should save an recipe', async () => {
      expect(await recipeService.save(recipe)).toBe(recipe);
    });
  });

  describe('delete', () => {
    it('should delete an recipe', async () => {
      expect(await recipeService.delete(1)).toBe(deleteResult);
    });
  });
});
