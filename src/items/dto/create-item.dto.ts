import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNumber, MaxLength } from 'class-validator';

export class CreateItemDto {
    @ApiProperty()
    @IsAlpha()
    @MaxLength(10)
    name: string;

    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsAlpha()
    color: string;
}
