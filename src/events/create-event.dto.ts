import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNumber, MaxLength } from 'class-validator';

export class CreateEventDto {
    @ApiProperty()
    @IsAlpha()
    @MaxLength(10)
    currentLocation: string;

    @ApiProperty()
    @IsNumber()
    itemId: number;
}
