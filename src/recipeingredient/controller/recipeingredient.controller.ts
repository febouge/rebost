import { Get, Controller, Param, Post, Delete, Body } from '@nestjs/common';
import { RecipeIngredient } from '../entity/recipeingredient.entity';
import { RecipeIngredientService } from '../service/recipeingredient.service';

@Controller('recipeingredient')
export class RecipeIngredientController {

  constructor(private readonly recipeingredientService: RecipeIngredientService) {}

  @Get(':id')
  async getRecipeIngredient(@Param('id') id): Promise<RecipeIngredient> {
    return this.recipeingredientService.getById(id);
  }

  @Post()
  async saveRecipeIngredient(@Body() recipeingredient: RecipeIngredient): Promise<RecipeIngredient> {
    return this.recipeingredientService.save(recipeingredient);
  }

  @Delete(':id')
  async deleteRecipeIngredient(@Param('id') id): Promise<RecipeIngredient> {
    return this.recipeingredientService.getById(id);
  }

  @Get('')
  async getRecipeIngredients(): Promise<RecipeIngredient[]> {
    return this.recipeingredientService.findAll();
  }
}
