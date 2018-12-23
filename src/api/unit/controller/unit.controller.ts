import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { UnitService } from '../service/unit.service';
import { Unit } from '../entity/unit.entity';
import { BaseController } from '../../base/controller/base.controller';
import { DeleteResult } from 'typeorm';

@Controller('units')
export class UnitController implements BaseController<Unit> {
  constructor(private readonly unitService: UnitService) {}

  @Get(':id')
  async getById(@Param('id') id): Promise<Unit> {
    return this.unitService.getById(id);
  }

  @Post()
  async save(@Body() unit: Unit): Promise<Unit> {
      return this.unitService.save(unit);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.unitService.delete(id);
  }

  @Get('')
  async findAll(): Promise<Unit[]> {
    return this.unitService.findAll();
  }
}
