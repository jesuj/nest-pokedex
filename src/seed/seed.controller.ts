import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LimitSeed } from 'src/common/dto/limit-seed';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed(@Query() query:LimitSeed) {
    return this.seedService.executeSeed(query);
  }
}
