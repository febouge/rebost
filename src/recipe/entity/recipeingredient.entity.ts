import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/entity/base.entity';
import { Tag } from '../../tag/entity/tag.entity';
import { Unit } from '../../unit/entity/unit.entity';
import { Ingredient } from '../../ingredient/entity/ingredient.entity';
import { Recipe } from './recipe.entity';

@Entity()
export class RecipeIngredient extends BaseEntity {

  @Column('float')
  quantity: number;

  @ManyToOne(type => Recipe, recipe => recipe.ingredients)
  recipe: Recipe;

  @ManyToOne(type => Unit)
  unit: Unit;

  @ManyToOne(type => Ingredient)
  ingredient: Ingredient;
}
