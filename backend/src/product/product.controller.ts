import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('productos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  async create(
    @Body() data: { name: string; price: number; type: string },
  ): Promise<Product> {
    return this.productService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { name?: string; price?: number; type?: string },
  ): Promise<Product> {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.productService.delete(id);
  }
}
