import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  addItem(name: string, price: number, color: string) {
    const itemId = Math.floor(Math.random() * 100) + 1;
    const newItem = new Item(itemId, name, price, color);
    this.items.push(newItem);
    return newItem;
  }

  getItems() {
    // DB call here
    return [...this.items];
  }

  getItem(itemId: number): Item {
    const item = this.items.find((item) => item.getId() === itemId);
    return item;
  }
}
