import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
<<<<<<< HEAD
import request from 'supertest';
=======
import * as request from 'supertest';
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
