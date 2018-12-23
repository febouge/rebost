import { Get, Controller, Param, Post, Delete, Body } from '@nestjs/common';
import { RecipeIngredient } from '../entity/recipeingredient.entity';
import { RecipeIngredientService } from '../service/recipeingredient.service';
import { BaseController } from '../../base/controller/base.controller';
import { DeleteResult } from 'typeorm';

@Controller('recipeingredients')
export class RecipeIngredientController
  implements BaseController<RecipeIngredient> {
  constructor(
    private readonly recipeingredientService: RecipeIngredientService,
  ) {}

  @Get(':id')
  async getById(@Param('id') id): Promise<RecipeIngredient> {
    return this.recipeingredientService.getById(id);
  }

  @Post()
  async save(
    @Body() recipeingredient: RecipeIngredient,
  ): Promise<RecipeIngredient> {
    return this.recipeingredientService.save(recipeingredient);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.recipeingredientService.delete(id);
  }

  @Get('')
  async findAll(): Promise<RecipeIngredient[]> {
    return this.recipeingredientService.findAll();
  }
}
