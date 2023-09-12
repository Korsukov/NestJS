import { Request } from 'express';
import {
  Controller,
  Get,
  ParseIntPipe,
  Param,
  Req,
  HostParam,
  Body,
  Post,
  BadRequestException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from 'dto/create.dto';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getParams(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    if (id > 2) {
      throw new BadRequestException('ID must be > 2');
    }
    return id;
  }
 
  @UsePipes(new ValidationPipe())
  @Post('create')
  create(@Body() dto: CreateDto) { 
    console.log(dto);
    return dto;
  }
}
