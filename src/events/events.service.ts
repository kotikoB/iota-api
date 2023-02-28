import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsService } from 'src/items/items.service';
import { Repository } from 'typeorm';
import { CnEvent } from './event.entity';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(CnEvent) private eventRepository: Repository<CnEvent>,
        private readonly itemsService: ItemsService,
    ) {}

    async addEvent(currentLocation: string, itemId: number): Promise<CnEvent> {
        const item = await this.itemsService.getItem(itemId);

        const event = new CnEvent(currentLocation, item);
        return this.eventRepository.save(event);
    }

    async getItemEvents(_itemId: number): Promise<CnEvent[]> {
        return this.eventRepository
            .createQueryBuilder('event')
            .leftJoinAndSelect('event.item', 'item')
            .where('event.itemId = :itemId', { itemId: _itemId })
            .getMany();
    }
}
