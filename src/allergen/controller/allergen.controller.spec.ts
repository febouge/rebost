import { Test, TestingModule } from '@nestjs/testing';
import { AllergenController } from './allergen.controller';
import { AllergenService } from '../service/allergen.service';
import { Repository, DeleteResult } from '../../../node_modules/typeorm';
import { Allergen } from '../entity/allergen.entity';
import { getRepositoryToken } from '../../../node_modules/@nestjs/typeorm';

describe('Allergen Controller', () => {
  let allergenController: AllergenController;
  let allergenService: AllergenService;
  let mockRepository = {};
  const allergenMock: Allergen = {
    id: 1,
    name: 'Sulfure',
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AllergenController],
      providers: [
        AllergenService,
        {
          provide: getRepositoryToken(Allergen),
          useValue: mockRepository,
        },
      ],
    }).compile();

    allergenService = module.get<AllergenService>(AllergenService);
    allergenController = module.get<AllergenController>(AllergenController);
  });

  describe('findAll', () => {
    it('should return an array of allergens', async () => {
      const result = [allergenMock];
      jest.spyOn(allergenService, 'findAll').mockImplementation(() => result);

      expect(await allergenController.findAll()).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete', async () => {
      const result = new DeleteResult();
      jest.spyOn(allergenService, 'delete').mockImplementation(() => result);

      expect(await allergenController.delete(1)).toBe(result);
    });
  });

  describe('save', () => {
    it('should save', async () => {
      jest
        .spyOn(allergenService, 'save')
        .mockImplementation(() => allergenMock);

      expect(await allergenController.save(allergenMock)).toBe(allergenMock);
    });
  });

  describe('find by id', () => {
    it('should return an allergen', async () => {
      jest
        .spyOn(allergenService, 'getById')
        .mockImplementation(() => allergenMock);

      expect(await allergenController.getById(1)).toBe(allergenMock);
    });
  });
});
