import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  addItem(name: string, price: number, color: string) {
    const itemId = Math.random();
    const newItem = new Item(itemId, name, price, color);
    this.items.push(newItem);
    return newItem;
  }

  getItems() {
    return [...this.items];
  }

  getItem(itemId: number): Item {
    const productIndex = this.items.findIndex(
      (prod) => prod.getId() === itemId,
    );
    const product = this.items[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
