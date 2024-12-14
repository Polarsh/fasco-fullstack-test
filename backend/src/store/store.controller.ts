/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { Store } from './store.schema';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async findAll(): Promise<Store[]> {
    return this.storeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Store> {
    return this.storeService.findOne(id);
  }

  @Post()
  async create(
    @Body() data: { name: string; city: string; address: string },
  ): Promise<Store> {
    return this.storeService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { name?: string; city?: string; address?: string },
  ): Promise<Store> {
    return this.storeService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.storeService.delete(id);
  }
}
