import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllergenController } from './controller/allergen.controller';
import { AllergenService } from './service/allergen.service';
import { Allergen } from './entity/allergen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Allergen])],
  controllers: [AllergenController],
  providers: [AllergenService],
})
export class AllergenModule {}
