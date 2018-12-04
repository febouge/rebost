import request from 'supertest';
import { Test } from '@nestjs/testing';
import { UnitModule } from './../../src/unit/unit.module';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as TestingUtilities from '../test-utilities';
import { Unit } from '../../src/unit/entity/unit.entity';

describe('UnitController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(TestingUtilities.getTestingConnectionConfig()),
        UnitModule
      ],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET /units', () => {
    return request(app.getHttpServer())
      .get('/units')
      .expect(200);
  });

  afterAll(async () => {
    app.close();
  })
});
