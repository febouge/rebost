import { UnitService } from './unit.service';
import { Unit } from '../entity/unit.entity';
import { DeleteResult } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UnitService', () => {
  const unit: Unit = {
    id: 1,
    name: 'Test unit',
  };
  const deleteResult: DeleteResult = {
    raw: null,
  };
  let findResult = [unit];
  let unitService: UnitService;
  let mockRepository = {
    find: () => findResult,
    findOne: () => unit,
    save: () => unit,
    delete: () => deleteResult,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitService,
        {
          provide: getRepositoryToken(Unit),
          useValue: mockRepository,
        },
      ],
    }).compile();

    unitService = module.get<UnitService>(UnitService);
  });

  describe('findAll', () => {
    it('should return an array of units', async () => {
      expect(await unitService.findAll()).toBe(findResult);
    });
  });

  describe('getById', () => {
    it('should return an unit', async () => {
      expect(await unitService.getById(1)).toBe(unit);
    });
  });

  describe('save', () => {
    it('should save an unit', async () => {
      expect(await unitService.save(unit)).toBe(unit);
    });
  });

  describe('delete', () => {
    it('should delete an unit', async () => {
      expect(await unitService.delete(1)).toBe(deleteResult);
    });
  });
});
