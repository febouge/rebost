import { Test, TestingModule } from '@nestjs/testing';
import { TagController } from './tag.controller';
import { TagService } from '../service/tag.service';

describe('Tag Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TagController],
      providers: [TagService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TagController = module.get<TagController>(TagController);
    expect(controller.root()).toBe('Hello from Tag!');
  });
});
