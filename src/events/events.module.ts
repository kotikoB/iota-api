import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { CnEvent } from './event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from 'src/items/items.service';
import { Item } from 'src/items/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CnEvent]),
    TypeOrmModule.forFeature([Item]),
  ],
  providers: [EventsService /**, ItemsService */],
  controllers: [EventsController],
})
export class EventsModule {}
