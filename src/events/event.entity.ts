import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/items/item.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CnEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  private currentLocation: string;

  @ApiProperty()
  private item: Item;

  constructor(currentLocation: string, item: Item) {
    this.currentLocation = currentLocation;
    this.item = item;
  }

  getCurrentLocation(): string {
    return this.currentLocation;
  }

  setCurrentLocation(location: string): void {
    this.currentLocation = location;
  }

  getItem(): Item {
    return this.item;
  }

  setItem(item: Item): void {
    this.item = item;
  }
}
