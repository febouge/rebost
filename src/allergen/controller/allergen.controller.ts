import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { AllergenService } from '../service/allergen.service';
import { Allergen } from '../entity/allergen.entity';
import { BaseController } from 'base/controller/base.controller';
import { DeleteResult } from '../../../node_modules/typeorm';

@Controller('allergen')
export class AllergenController implements BaseController<Allergen> {
  constructor(private readonly allergenService: AllergenService) {}

  @Get(':id')
  async getById(@Param('id') id): Promise<Allergen> {
    return this.allergenService.getById(id);
  }

  @Post()
  async save(@Body() allergen: Allergen): Promise<Allergen> {
    return this.allergenService.save(allergen);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.allergenService.delete(id);
  }

  @Get('')
  async findAll(): Promise<Allergen[]> {
    return this.allergenService.findAll();
  }
}
