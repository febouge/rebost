import { Test, TestingModule } from '@nestjs/testing';
import { UnitController } from './unit.controller';
import { UnitService } from '../service/unit.service';
import { Unit } from '../entity/unit.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';

describe('Unit Controller', () => {
  let unitController: UnitController;
  let unitService: UnitService;
  let mockRepository = {};
  const unitMock: Unit = {
    id: 1,
    name: 'g',
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [UnitController],
      providers: [
        UnitService,
        {
          provide: getRepositoryToken(Unit),
          useValue: mockRepository,
        },
      ],
    }).compile();

    unitService = module.get<UnitService>(UnitService);
    unitController = module.get<UnitController>(UnitController);
  });

  describe('findAll', () => {
    it('should return an array of units', async () => {
      const result = [unitMock];
      jest.spyOn(unitService, 'findAll').mockImplementation(() => result);

      expect(await unitController.findAll()).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete', async () => {
      const result = new DeleteResult();
      jest.spyOn(unitService, 'delete').mockImplementation(() => result);

      expect(await unitController.delete(1)).toBe(result);
    });
  });

  describe('save', () => {
    it('should save', async () => {
      jest.spyOn(unitService, 'save').mockImplementation(() => unitMock);

      expect(await unitController.save(unitMock)).toBe(unitMock);
    });
  });

  describe('find by id', () => {
    it('should return an unit', async () => {
      jest.spyOn(unitService, 'getById').mockImplementation(() => unitMock);

      expect(await unitController.getById(1)).toBe(unitMock);
    });
  });
});
