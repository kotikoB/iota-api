import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private itemRepository: Repository<Item>) {}

    addItem(name: string, price: number, color: string): Promise<Item> {
        const newItem = new Item(name, price, color);
        return this.itemRepository.save(newItem);
    }

    getItems(): Promise<Item[]> {
        return this.itemRepository.find();
    }

    async getItem(itemId: number): Promise<Item> {
        try {
            const item = await this.itemRepository.findOneOrFail({
                where: { id: itemId },
            });
            return item;
        } catch (err) {
            throw err;
        }
    }

    async updateItem(id: number, name: string): Promise<Item> {
        const item = await this.getItem(id);
        item.setName(name);
        return this.itemRepository.save(item);
    }
}
