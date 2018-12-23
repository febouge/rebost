import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { IngredientService } from '../service/ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';
import { BaseController } from 'base/controller/base.controller';
import { DeleteResult } from 'typeorm';

@Controller('ingredients')
export class IngredientController implements BaseController<Ingredient> {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get(':id')
  async getById(@Param('id') id): Promise<Ingredient> {
    return this.ingredientService.getById(id);
  }

  @Post()
  async save(@Body() ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientService.save(ingredient);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.ingredientService.delete(id);
  }

  @Get('')
  async findAll(): Promise<Ingredient[]> {
    return this.ingredientService.findAll();
  }
}
