import { Get, Controller } from '@nestjs/common';
import { RecipeService } from '../service/recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  root(): string {
    return this.recipeService.root();
  }
}
