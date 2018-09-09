import { Get, Controller, Body, Param, Delete, Post } from '@nestjs/common';
import { IngredientService } from '../service/ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get(':id')
  async getIngredient(@Param('id') id): Promise<Ingredient> {
    return this.ingredientService.getById(id);
  }

  @Post()
  async saveIngredient(@Body() ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientService.save(ingredient);
  }

  @Delete(':id')
  async deleteIngredient(@Param('id') id): Promise<Ingredient> {
    return this.ingredientService.getById(id);
  }

  @Get('')
  async getIngredients(): Promise<Ingredient[]> {
    return this.ingredientService.findAll();
  }
}
