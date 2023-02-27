import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiCreatedResponse({ type: Item })
  @Post()
  addItem(@Body() createItemDto: CreateItemDto) {
    const generatedItem = this.itemsService.addItem(
      createItemDto.name,
      createItemDto.price,
      createItemDto.color,
    );
    return generatedItem;
  }

  @ApiOkResponse({ type: Item, isArray: true })
  @Get()
  getAllItems() {
    return this.itemsService.getItems();
  }

  @ApiOkResponse({ type: Item })
  @Get(':id')
  getItem(@Param('id') prodId: number): Item {
    return this.itemsService.getItem(prodId);
  }
}
