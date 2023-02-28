import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { CnEvent } from './event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from 'src/items/items.module';

@Module({
  imports: [TypeOrmModule.forFeature([CnEvent]), ItemsModule],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
