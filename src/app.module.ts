import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AuthorsResolver } from './authors/authors.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from './store/store.module';
import { loggerMiddleware } from './store/store.middleware';
import { upperDirectiveTransformer } from './store/upper.directive';
import { OrderResolver } from './store/store.resolver';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // validationSchema: Joi.object({
      //   MONGO: Joi.string().required(),
      // }),
    }),
    MongooseModule.forRoot(`${process.env.MONGO}`),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      buildSchemaOptions: {
        fieldMiddleware: [loggerMiddleware],
      },
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
    }),

    StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthorsResolver],
})
export class AppModule {}
