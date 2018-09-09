import { Module } from '@nestjs/common';
import { RecipeController } from './controller/recipe.controller';
import { RecipeService } from './service/recipe.service';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
