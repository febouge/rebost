import { Test, TestingModule } from '@nestjs/testing';
import { AllergenController } from './allergen.controller';
import { AllergenService } from '../service/allergen.service';
import { Repository } from '../../../node_modules/typeorm';
import { Allergen } from '../entity/allergen.entity';
import { getRepositoryToken } from '../../../node_modules/@nestjs/typeorm';

describe('Allergen Controller', () => {
  let allergenController: AllergenController;
  let allergenService: AllergenService;
  let mockRepository = {};

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AllergenController],
      providers: [
        AllergenService,
        {
          provide: getRepositoryToken(Allergen),
          useValue: mockRepository,
        }
      ],
    }).compile();

    allergenService = module.get<AllergenService>(AllergenService);
    allergenController = module.get<AllergenController>(AllergenController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(allergenService, 'findAll').mockImplementation(() => result);

      expect(await allergenService.findAll()).toBe(result);
    });
  });
});
