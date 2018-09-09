import { BaseEntity } from '../../base/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unit extends BaseEntity {

  @Column({ length: 100 })
  name: string;

}
