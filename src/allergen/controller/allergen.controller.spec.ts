import { Test, TestingModule } from '@nestjs/testing';
import { AllergenController } from './allergen.controller';
import { AllergenService } from '../service/allergen.service';

describe('Allergen Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AllergenController],
      providers: [AllergenService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AllergenController = module.get<AllergenController>(AllergenController);
    expect(controller.root()).toBe('Hello from Allergen!');
  });
});
