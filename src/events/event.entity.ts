import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/items/item.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CnEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  private currentLocation: string;

  @ApiProperty({ type: () => Item })
  @ManyToOne(() => Item, (item) => item.getEvents, { onDelete: 'SET NULL' })
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
