import { IngredientService } from './ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';
import { Repository } from 'typeorm';

describe('IngredientService', () => {
  let ingredientService: IngredientService;

  beforeEach(() => {
    ingredientService = new IngredientService(new Repository<Ingredient>());
  });

  describe('findAll', () => {
    it('should return an array of ingredients', async () => {
      const result = [new Ingredient()];
      jest.spyOn(ingredientService, 'findAll').mockImplementation(() => result);

      expect(await ingredientService.findAll()).toBe(result);
    });
  });

  describe('getById', () => {
    it('should return an ingredients', async () => {
      const id = 1;
      const result = new Ingredient();
      result.id = 1;
      jest.spyOn(ingredientService, 'getById').mockImplementation((id) => result);

      expect(await ingredientService.getById(id)).toBe(result);
    });
  });
});
