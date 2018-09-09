import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { BaseService } from '../../base/service/base.service';
import { Tag } from '../entity/tag.entity';

@Injectable()
export class TagService implements BaseService<Tag> {

  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async getById(id: number): Promise<Tag> {
    return await this.tagRepository.findOne(id);
  }

  async save(tag: Tag): Promise<Tag> {
    return await this.tagRepository.save(tag);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.tagRepository.delete(id);
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }
}
