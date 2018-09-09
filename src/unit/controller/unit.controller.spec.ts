import { Test, TestingModule } from '@nestjs/testing';
import { UnitController } from './unit.controller';
import { UnitService } from '../service/unit.service';

describe('Unit Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UnitController],
      providers: [UnitService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UnitController = module.get<UnitController>(UnitController);
    expect(controller.root()).toBe('Hello from Unit!');
  });
});
