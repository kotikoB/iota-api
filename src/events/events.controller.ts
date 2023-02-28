import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';
import { CnEvent } from './event.entity';
import { EventsService } from './events.service';
import { eventSchemaValidator } from './create-event.schema';
const Ajv = require('ajv');
const ajv = new Ajv();

@ApiTags('Events')
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @ApiCreatedResponse({ type: Event })
    @ApiBadRequestResponse()
    @Post()
    addItem(@Body() createEventDto: CreateEventDto) {
        const valid: boolean = ajv.validate(eventSchemaValidator, createEventDto);
        if (!valid) throw new BadRequestException([...ajv.errors]);
        const generatedEvent = this.eventsService.addEvent(createEventDto.currentLocation, createEventDto.itemId);
        return generatedEvent;
    }

    @ApiOkResponse({ type: CnEvent, isArray: true })
    @Get(':itemId')
    getAllItems(@Param('itemId', ParseIntPipe) _itemId: number) {
        return this.eventsService.getItemEvents(_itemId);
    }
}
