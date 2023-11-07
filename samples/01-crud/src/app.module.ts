import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import CatEntity from './cats/cat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest-crud',
      password: 'nest-crud',
      database: 'nest-crud',
      entities: [CatEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CatsModule,
  ],
})
export class AppModule {}
