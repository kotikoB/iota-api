import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
import { CreateEventDto } from './create-event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiCreatedResponse({ type: Event })
  @ApiBadRequestResponse()
  @Post()
  addItem(@Body() createEventDto: CreateEventDto) {
    const generatedEvent = this.eventsService.addEvent(
      createEventDto.currentLocation,
      createEventDto.itemId,
    );
    return generatedEvent;
  }
}
