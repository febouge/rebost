import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1536401384131 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE tag (
      id integer PRIMARY KEY,
      name text UNIQUE NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE unit (
      id integer PRIMARY KEY,
      name text UNIQUE NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE allergen (
      id integer PRIMARY KEY,
      name text UNIQUE NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE ingredient (
      id integer PRIMARY KEY,
      name text UNIQUE NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE recipe (
      id integer PRIMARY KEY,
      name text UNIQUE NOT NULL,
      instructions text UNIQUE NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE ingredient_allergen (
      ingredientid integer REFERENCES ingredient (id),
      allergenid integer REFERENCES allergen (id),
      PRIMARY KEY (ingredientid, allergenid)
    )`);
    await queryRunner.query(`CREATE TABLE recipe_tag (
      recipeid integer REFERENCES recipe (id),
      tagid integer REFERENCES tag (id),
      PRIMARY KEY (recipeid, tagid)
    )`);
    await queryRunner.query(`CREATE TABLE recipe_ingredient (
      id integer PRIMARY KEY,
      quantity float NOT NULL,
      recipeid integer REFERENCES recipe (id),
      ingredientid integer REFERENCES ingredient (id),
      unitid integer REFERENCES unit (id)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE ingredient_allergen`);
    await queryRunner.query(`DROP TABLE recipeingredient`);
    await queryRunner.query(`DROP TABLE recipe_tag`);
    await queryRunner.query(`DROP TABLE tag`);
    await queryRunner.query(`DROP TABLE unit`);
    await queryRunner.query(`DROP TABLE allergen`);
    await queryRunner.query(`DROP TABLE ingredient`);
    await queryRunner.query(`DROP TABLE recipe`);
  }

}
