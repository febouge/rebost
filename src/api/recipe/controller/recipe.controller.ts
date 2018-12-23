import { Get, Controller, Param, Post, Delete, Body } from '@nestjs/common';
import { Recipe } from '../entity/recipe.entity';
import { RecipeService } from '../service/recipe.service';
import { BaseController } from '../../base/controller/base.controller';
import { DeleteResult } from 'typeorm';

@Controller('recipes')
export class RecipeController implements BaseController<Recipe> {
  constructor(private readonly recipeService: RecipeService) {}

  @Get(':id')
  async getById(@Param('id') id): Promise<Recipe> {
    return this.recipeService.getById(id);
  }

  @Post()
  async save(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipeService.save(recipe);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.recipeService.delete(id);
  }

  @Get('')
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }
}
