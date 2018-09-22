import { Test, TestingModule } from '@nestjs/testing';
import { RecipeController } from './recipe.controller';
import { RecipeService } from '../service/recipe.service';

describe('Recipe Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [RecipeService],
    }).compile();
  });
});
