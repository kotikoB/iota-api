import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
