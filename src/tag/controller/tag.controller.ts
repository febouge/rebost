import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { TagService } from '../service/tag.service';
import { Tag } from '../entity/tag.entity';
import { BaseController } from '../../base/controller/base.controller';
import { DeleteResult } from 'typeorm';

@Controller('tags')
export class TagController implements BaseController<Tag> {
  constructor(private readonly tagService: TagService) {}

  @Get(':id')
  async getById(@Param('id') id): Promise<Tag> {
    return this.tagService.getById(id);
  }

  @Post()
  async save(@Body() tag: Tag): Promise<Tag> {
    return this.tagService.save(tag);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.tagService.delete(id);
  }

  @Get('')
  async findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }
}
