import { Test, TestingModule } from '@nestjs/testing';
import { TagController } from './tag.controller';
import { TagService } from '../service/tag.service';
import { Tag } from '../entity/tag.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';

describe('Tag Controller', () => {
  let tagController: TagController;
  let tagService: TagService;
  let mockRepository = {};
  const tagMock: Tag = {
    id: 1,
    name: 'Test',
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [TagController],
      providers: [
        TagService,
        {
          provide: getRepositoryToken(Tag),
          useValue: mockRepository,
        },
      ],
    }).compile();

    tagService = module.get<TagService>(TagService);
    tagController = module.get<TagController>(TagController);
  });

  describe('findAll', () => {
    it('should return an array of tags', async () => {
      const result = [tagMock];
      jest.spyOn(tagService, 'findAll').mockImplementation(() => result);

      expect(await tagController.findAll()).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete', async () => {
      const result = new DeleteResult();
      jest.spyOn(tagService, 'delete').mockImplementation(() => result);

      expect(await tagController.delete(1)).toBe(result);
    });
  });

  describe('save', () => {
    it('should save', async () => {
      jest.spyOn(tagService, 'save').mockImplementation(() => tagMock);

      expect(await tagController.save(tagMock)).toBe(tagMock);
    });
  });

  describe('find by id', () => {
    it('should return an tag', async () => {
      jest.spyOn(tagService, 'getById').mockImplementation(() => tagMock);

      expect(await tagController.getById(1)).toBe(tagMock);
    });
  });
});
