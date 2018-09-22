import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../base/entity/base.entity';
import { Tag } from '../../tag/entity/tag.entity';
import { Unit } from '../../unit/entity/unit.entity';
import { Ingredient } from '../../ingredient/entity/ingredient.entity';
import { Recipe } from '../../recipe/entity/recipe.entity';

@Entity('recipe_ingredient')
export class RecipeIngredient extends BaseEntity {

  @Column('float')
  quantity: number;

  @ManyToOne(type => Recipe, recipe => recipe.recipeIngredients)
  @JoinColumn({ name: 'recipeId', referencedColumnName: 'id'})
  recipe: Recipe;

  @ManyToOne(type => Unit)
  @JoinColumn({ name: 'unitId', referencedColumnName: 'id'})
  unit: Unit;

  @ManyToOne(type => Ingredient)
  @JoinColumn({ name: 'ingredientId', referencedColumnName: 'id'})
  ingredient: Ingredient;
}
