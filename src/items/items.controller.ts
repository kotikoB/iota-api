import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/CreateItemDto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  addItem(@Body() createItemDto: CreateItemDto) {
    const generatedItem = this.itemsService.addItem(
      createItemDto.name,
      createItemDto.price,
      createItemDto.color,
    );
    return generatedItem;
  }

  @Get()
  getAllItems() {
    return this.itemsService.getItems();
  }
}
