import { Entity, Column, ManyToMany, OneToMany, JoinTable, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../base/entity/base.entity';
import { Tag } from '../../tag/entity/tag.entity';
import { RecipeIngredient } from '../../recipeingredient/entity/recipeingredient.entity';

@Entity('recipe')
export class Recipe extends BaseEntity {

  @Column({ length: 100 })
  name: string;

  @Column({ length: 1000 })
  instructions: string;

  @OneToMany(type => RecipeIngredient, recipeIngredients => recipeIngredients.recipe, {
    cascade: true
  })
  recipeIngredients: RecipeIngredient[];

  @ManyToMany(type => Tag, {
    cascade: true
  })
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
