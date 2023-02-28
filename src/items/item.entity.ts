import { ApiProperty } from '@nestjs/swagger';
import { CnEvent } from 'src/events/event.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    private name: string;

    @ApiProperty()
    @Column()
    private price: number;

    @ApiProperty()
    @Column()
    private color: string;

    @OneToMany(() => CnEvent, (event) => event.getItem)
    private events: CnEvent[];

    constructor(name: string, price: number, color: string) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    getEvents(): CnEvent[] {
        return this.events;
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
