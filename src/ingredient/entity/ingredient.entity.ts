import { BaseEntity } from '../../base/entity/base.entity';
import { Allergen } from '../../allergen/entity/allergen.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Ingredient extends BaseEntity {
  @Column({ length: 100, unique: true })
  name: string;

  @ManyToMany(type => Allergen)
  @JoinTable({
    name: 'ingredients_allergens',
    joinColumn: {
      name: 'ingredients',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'allergens',
      referencedColumnName: 'id',
    },
  })
  allergens: Allergen[];
}
