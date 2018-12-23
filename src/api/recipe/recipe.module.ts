import { Module } from '@nestjs/common';
import { RecipeController } from './controller/recipe.controller';
import { RecipeService } from './service/recipe.service';
import { Recipe } from './entity/recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
