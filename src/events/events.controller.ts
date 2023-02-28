import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';
import { CnEvent } from './event.entity';
import { EventsService } from './events.service';

@ApiTags('Events')
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @ApiCreatedResponse({ type: Event })
    @ApiBadRequestResponse()
    @Post()
    addItem(@Body() createEventDto: CreateEventDto) {
        const generatedEvent = this.eventsService.addEvent(createEventDto.currentLocation, createEventDto.itemId);
        return generatedEvent;
    }

    @ApiOkResponse({ type: CnEvent, isArray: true })
    @Get(':itemId')
    getAllItems(@Param('itemId', ParseIntPipe) _itemId: number) {
        return this.eventsService.getItemEvents(_itemId);
    }
}
