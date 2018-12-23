import { TagService } from './tag.service';
import { Tag } from '../entity/tag.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TagService', () => {
  const tag: Tag = {
    id: 1,
    name: 'Test tag',
  };
  const deleteResult: DeleteResult = {
    raw: null,
  };
  let findResult = [tag];
  let tagService: TagService;
  let mockRepository = {
    find: () => findResult,
    findOne: () => tag,
    save: () => tag,
    delete: () => deleteResult,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TagService,
        {
          provide: getRepositoryToken(Tag),
          useValue: mockRepository,
        },
      ],
    }).compile();

    tagService = module.get<TagService>(TagService);
  });

  describe('findAll', () => {
    it('should return an array of tags', async () => {
      expect(await tagService.findAll()).toBe(findResult);
    });
  });

  describe('getById', () => {
    it('should return an tag', async () => {
      expect(await tagService.getById(1)).toBe(tag);
    });
  });

  describe('save', () => {
    it('should save an tag', async () => {
      expect(await tagService.save(tag)).toBe(tag);
    });
  });

  describe('delete', () => {
    it('should delete an tag', async () => {
      expect(await tagService.delete(1)).toBe(deleteResult);
    });
  });
});
