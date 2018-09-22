import { Get, Controller, Param, Post, Delete, Body } from '@nestjs/common';
import { Recipe } from '../entity/recipe.entity';
import { RecipeService } from '../service/recipe.service';

@Controller('recipe')
export class RecipeController {

  constructor(private readonly recipeService: RecipeService) {}

  @Get(':id')
  async getRecipe(@Param('id') id): Promise<Recipe> {
    return this.recipeService.getById(id);
  }

  @Post()
  async saveRecipe(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipeService.save(recipe);
  }

  @Delete(':id')
  async deleteRecipe(@Param('id') id): Promise<Recipe> {
    return this.recipeService.getById(id);
  }

  @Get('')
  async getRecipes(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }
}
