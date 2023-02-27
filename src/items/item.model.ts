export class Item {
  private name: string;
  private price: number;
  private color: string;

  constructor(name: string, price: number, color: string) {
    this.name = name;
    this.price = price;
    this.color = color;
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
