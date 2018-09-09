import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { UnitService } from '../service/unit.service';
import { Unit } from '../entity/unit.entity';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Get(':id')
  async getUnit(@Param('id') id): Promise<Unit> {
    return this.unitService.getById(id);
  }

  @Post()
  async saveUnit(@Body() unit: Unit): Promise<Unit> {
    return this.unitService.save(unit);
  }

  @Delete(':id')
  async deleteUnit(@Param('id') id): Promise<Unit> {
    return this.unitService.getById(id);
  }

  @Get('')
  async getUnits(): Promise<Unit[]> {
    return this.unitService.findAll();
  }
}
