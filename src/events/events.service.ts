import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/items/item.entity';
import { ItemsService } from 'src/items/items.service';
import { Repository } from 'typeorm';
import { CnEvent } from './event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(CnEvent) private itemRepository: Repository<CnEvent>,
    private readonly itemsService: ItemsService,
  ) {}

  async addEvent(name: string, itemId: number): Promise<CnEvent> {
    const item = await this.itemsService.getItem(itemId);

    const newItem = new CnEvent(name, null);
    return this.itemRepository.save(newItem);
  }
}
