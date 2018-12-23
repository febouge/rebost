import { AllergenService } from './allergen.service';
import { Allergen } from '../entity/allergen.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AllergenService', () => {
  const allergen: Allergen = {
    id: 1,
    name: 'Test allergen',
  };
  const deleteResult: DeleteResult = {
    raw: null,
  };
  let findResult = [allergen];
  let allergenService: AllergenService;
  let mockRepository = {
    find: () => findResult,
    findOne: () => allergen,
    save: () => allergen,
    delete: () => deleteResult,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AllergenService,
        {
          provide: getRepositoryToken(Allergen),
          useValue: mockRepository,
        },
      ],
    }).compile();

    allergenService = module.get<AllergenService>(AllergenService);
  });

  describe('findAll', () => {
    it('should return an array of allergens', async () => {
      expect(await allergenService.findAll()).toBe(findResult);
    });
  });

  describe('getById', () => {
    it('should return an allergen', async () => {
      expect(await allergenService.getById(1)).toBe(allergen);
    });
  });

  describe('save', () => {
    it('should save an allergen', async () => {
      expect(await allergenService.save(allergen)).toBe(allergen);
    });
  });

  describe('delete', () => {
    it('should delete an allergen', async () => {
      expect(await allergenService.delete(1)).toBe(deleteResult);
    });
  });
});
