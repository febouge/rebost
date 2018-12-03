import { Test, TestingModule } from '@nestjs/testing';
import { RecipeController } from './recipe.controller';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../entity/recipe.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';

describe('Recipe Controller', () => {
  let recipeController: RecipeController;
  let recipeService: RecipeService;
  const recipeMock: Recipe = {
    id: 1,
    name: 'Test Recipe',
    instructions: 'Just for test',
    recipeIngredients: [],
    tags: []
  };
  const mockRepository = {};

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [
        RecipeService,
        {
          provide: getRepositoryToken(Recipe),
          useValue: mockRepository,
        }
      ],
    }).compile();

    recipeService = module.get<RecipeService>(RecipeService);
    recipeController = module.get<RecipeController>(RecipeController);
  });

  describe('findAll', () => {
    it('should return an array of recipes', async () => {
      const result = [recipeMock];
      jest.spyOn(recipeService, 'findAll').mockImplementation(() => result);

      expect(await recipeController.findAll()).toBe(result);
    });
  });


  describe('delete', () => {
    it('should delete', async () => {
      const result = new DeleteResult();
      jest.spyOn(recipeService, 'delete').mockImplementation(() => result);

      expect(await recipeController.delete(1)).toBe(result);
    });
  });


  describe('save', () => {
    it('should save', async () => {
      jest.spyOn(recipeService, 'save').mockImplementation(() => recipeMock);

      expect(await recipeController.save(recipeMock)).toBe(recipeMock);
    });
  });


  describe('find by id', () => {
    it('should return an recipe', async () => {
      jest.spyOn(recipeService, 'getById').mockImplementation(() => recipeMock);

      expect(await recipeController.getById(1)).toBe(recipeMock);
    });
  });
});
