import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as TestingUtilities from './test-utilities';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(TestingUtilities.getTestingConnectionConfig()),
        AppModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET /', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  afterAll(async () => {
    app.close();
  })
});
