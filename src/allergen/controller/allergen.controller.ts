import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { AllergenService } from '../service/allergen.service';
import { Allergen } from '../entity/allergen.entity';

@Controller('allergen')
export class AllergenController {
  constructor(private readonly allergenService: AllergenService) {}

  @Get(':id')
  async getAllergen(@Param('id') id): Promise<Allergen> {
    return this.allergenService.getById(id);
  }

  @Post()
  async saveAllergen(@Body() allergen: Allergen): Promise<Allergen> {
    return this.allergenService.save(allergen);
  }

  @Delete(':id')
  async deleteAllergen(@Param('id') id): Promise<Allergen> {
    return this.allergenService.getById(id);
  }

  @Get('')
  async getAllergens(): Promise<Allergen[]> {
    return this.allergenService.findAll();
  }
}
