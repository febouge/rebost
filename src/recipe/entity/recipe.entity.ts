import { Entity, Column, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../../base/entity/base.entity';
import { Tag } from '../../tag/entity/tag.entity';
import { RecipeIngredient } from './recipeingredient.entity';

@Entity()
export class Recipe extends BaseEntity {

  @Column({ length: 100 })
  name: string;

  @Column({ length: 1000 })
  instructions: string;

  @OneToMany(type => RecipeIngredient, ingredients => ingredients.recipe)
  ingredients: RecipeIngredient[];

  @ManyToMany(type => Tag)
  @JoinTable({
    name: "recipes_tags",
    joinColumn: {
      name: "recipes",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "tags",
      referencedColumnName: "id"
    }
  })
  tags: Tag[];

}
