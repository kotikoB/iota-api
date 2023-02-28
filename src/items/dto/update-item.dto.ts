import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNumber, MaxLength } from 'class-validator';

export class UpdateItemDto {
    @ApiProperty()
    @IsAlpha()
    @MaxLength(10)
    name: string;
}
