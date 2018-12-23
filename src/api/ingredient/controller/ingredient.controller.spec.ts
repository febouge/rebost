import { Test, TestingModule } from '@nestjs/testing';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from '../service/ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';

describe('Ingredient Controller', () => {
  let ingredientController: IngredientController;
  let ingredientService: IngredientService;
  let mockRepository = {};
  const ingredientMock: Ingredient = {
    id: 1,
    name: 'Tempeh',
    allergens: [],
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [IngredientController],
      providers: [
        IngredientService,
        {
          provide: getRepositoryToken(Ingredient),
          useValue: mockRepository,
        },
      ],
    }).compile();

    ingredientService = module.get<IngredientService>(IngredientService);
    ingredientController = module.get<IngredientController>(
      IngredientController,
    );
  });

  describe('findAll', () => {
    it('should return an array of ingredients', async () => {
      const result = [ingredientMock];
      jest.spyOn(ingredientService, 'findAll').mockImplementation(() => result);

      expect(await ingredientController.findAll()).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete', async () => {
      const result = new DeleteResult();
      jest.spyOn(ingredientService, 'delete').mockImplementation(() => result);

      expect(await ingredientController.delete(1)).toBe(result);
    });
  });

  describe('save', () => {
    it('should save', async () => {
      jest
        .spyOn(ingredientService, 'save')
        .mockImplementation(() => ingredientMock);

      expect(await ingredientController.save(ingredientMock)).toBe(
        ingredientMock,
      );
    });
  });

  describe('find by id', () => {
    it('should return an ingredient', async () => {
      jest
        .spyOn(ingredientService, 'getById')
        .mockImplementation(() => ingredientMock);

      expect(await ingredientController.getById(1)).toBe(ingredientMock);
    });
  });
});
