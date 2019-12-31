import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi = require('@hapi/joi');

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(3333),
        APP_NAME: Joi.string().default('MyPets'),
        APP_KEY: Joi.string().required(),
        DB_CONNECTION: Joi.string().required(),
        DB_HOST: Joi.string(),
        DB_PORT: Joi.number(),
        DB_USER: Joi.string(),
        DB_PASSWORD: Joi.string(),
        DB_DATABASE: Joi.string(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
