import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { TagService } from '../service/tag.service';
import { Tag } from '../entity/tag.entity';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get(':id')
  async getTag(@Param('id') id): Promise<Tag> {
    return this.tagService.getById(id);
  }

  @Post()
  async saveTag(@Body() tag: Tag): Promise<Tag> {
    return this.tagService.save(tag);
  }

  @Delete(':id')
  async deleteTag(@Param('id') id): Promise<Tag> {
    return this.tagService.getById(id);
  }

  @Get('')
  async getTags(): Promise<Tag[]> {
    return this.tagService.findAll();
  }
}
