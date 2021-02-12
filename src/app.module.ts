import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { TransactionModule } from './transaction/transaction.module';
import { TrainerModule } from './trainer/trainer.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot(typeOrmConfig), 
    GraphQLModule.forRoot({
      autoSchemaFile : true
    }), UserModule, AuthModule, CourseModule, TransactionModule, TrainerModule
  ],
})
export class AppModule {}
