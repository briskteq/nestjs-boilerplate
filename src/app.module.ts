import { Module } from '@nestjs/common';
import { UsersModule } from './users/users/users.module';
import { TypeormConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forRoot(TypeormConfig), UsersModule],
  providers: [],
})
export class AppModule {}
