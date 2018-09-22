import { IngredientService } from './ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';
import { Repository, DeleteResult } from 'typeorm';

describe('IngredientService', () => {
  let ingredientService: IngredientService;
  let ingredientRepository: Repository<Ingredient>;

  beforeEach(() => {
    ingredientRepository = new Repository<Ingredient>();
    ingredientService = new IngredientService(ingredientRepository);
  });

  describe('findAll', () => {
    it('should return an array of ingredients', async () => {
      const result = [new Ingredient()];
      jest.spyOn(ingredientRepository, 'find').mockImplementation(() => result);

      expect(await ingredientService.findAll()).toBe(result);
    });
  });

  describe('getById', () => {
    it('should return an ingredients', async () => {
      const id = 1;
      const result = new Ingredient();
      result.id = 1;
      jest.spyOn(ingredientRepository, 'findOne').mockImplementation(id => result);

      expect(await ingredientService.getById(id)).toBe(result);
    });
  });

  describe('save', () => {
    it('should save an ingredient', async () => {
      const id = 1;
      const result = new Ingredient();
      result.id = 1;
      jest.spyOn(ingredientRepository, 'save').mockImplementation(ingredient => result);

      expect(await ingredientService.save(result)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete an ingredient', async () => {
      const id = 1;
      const result = new DeleteResult();
      jest.spyOn(ingredientRepository, 'delete').mockImplementation(ingredient => result);

      expect(await ingredientService.delete(id)).toBe(result);
    });
  });
});
