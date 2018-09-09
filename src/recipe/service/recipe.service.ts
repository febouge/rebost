import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  root(): string {
    return 'Hello from recipe!';
  }
}
