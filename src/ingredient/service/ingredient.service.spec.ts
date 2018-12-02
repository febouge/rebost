import { IngredientService } from './ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('IngredientService', () => {
  const ingredient: Ingredient = {
    id: 1,
    name: 'Test ingredient',
    allergens: []
  };
  const deleteResult: DeleteResult = {
    raw: null
  };
  let findResult = [ingredient];
  let ingredientService: IngredientService;
  let mockRepository = {
    find: () => findResult,
    findOne: () => ingredient,
    save: () => ingredient,
    delete: () => deleteResult
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        IngredientService,
        {
          provide: getRepositoryToken(Ingredient),
          useValue: mockRepository,
        }
      ],
    }).compile();

    ingredientService = module.get<IngredientService>(IngredientService);
  });

  describe('findAll', () => {
    it('should return an array of ingredients', async () => {
      expect(await ingredientService.findAll()).toBe(findResult);
    });
  });

  describe('getById', () => {
    it('should return an ingredient', async () => {
      expect(await ingredientService.getById(1)).toBe(ingredient);
    });
  });

  describe('save', () => {
    it('should save an ingredient', async () => {
      expect(await ingredientService.save(ingredient)).toBe(ingredient);
    });
  });

  describe('delete', () => {
    it('should delete an ingredient', async () => {
      expect(await ingredientService.delete(1)).toBe(deleteResult);
    });
  });
});
