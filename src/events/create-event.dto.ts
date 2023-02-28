import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNumber, MaxLength } from 'class-validator';
import { Item } from 'src/items/item.entity';

export class CreateEventDto {
    @ApiProperty()
    @IsAlpha()
    @MaxLength(10)
    currentLocation: string;

    @ApiProperty()
    @IsNumber()
    itemId: number;
}
