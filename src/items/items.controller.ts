import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiCreatedResponse({ type: Item })
  @ApiBadRequestResponse()
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
  @ApiNotFoundResponse()
  @Get(':id')
  getItem(@Param('id', ParseIntPipe) itemId: number): Promise<Item> {
    return this.itemsService.getItem(itemId);
  }

  @ApiCreatedResponse({ type: Item })
  @ApiBadRequestResponse()
  @Put(':id')
  updateItem(
    @Param('id', ParseIntPipe) itemId: number,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    const generatedItem = this.itemsService.updateItem(
      itemId,
      updateItemDto.name,
    );
    return generatedItem;
  }
}
