import { IngredientService } from './ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('IngredientService', () => {
  let findResult = [new Ingredient()];
  let ingredientService: IngredientService;
  let mockRepository = {
    find: () => findResult
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

  // describe('getById', () => {
  //   it('should return an ingredients', async () => {
  //     const id = 1;
  //     const result = new Ingredient();
  //     result.id = 1;
  //     jest.spyOn(ingredientRepository, 'findOne').mockImplementation(id => result);
  //
  //     expect(await ingredientService.getById(id)).toBe(result);
  //   });
  // });
  //
  // describe('save', () => {
  //   it('should save an ingredient', async () => {
  //     const id = 1;
  //     const result = new Ingredient();
  //     result.id = 1;
  //     jest.spyOn(ingredientRepository, 'save').mockImplementation(ingredient => result);
  //
  //     expect(await ingredientService.save(result)).toBe(result);
  //   });
  // });
  //
  // describe('delete', () => {
  //   it('should delete an ingredient', async () => {
  //     const id = 1;
  //     const result = new DeleteResult();
  //     jest.spyOn(ingredientRepository, 'delete').mockImplementation(ingredient => result);
  //
  //     expect(await ingredientService.delete(id)).toBe(result);
  //   });
  // });
});
