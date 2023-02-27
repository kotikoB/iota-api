import { ApiProperty } from '@nestjs/swagger';

export class Item {
  private id: number;
  @ApiProperty()
  private name: string;
  @ApiProperty()
  private price: number;
  @ApiProperty()
  private color: string;

  constructor(id: number = null, name: string, price: number, color: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.color = color;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }
}
