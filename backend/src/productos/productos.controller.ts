import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './producto.schema';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producto> {
    return this.productosService.findOne(id);
  }

  @Post()
  async create(
    @Body() data: { name: string; price: number; type: string },
  ): Promise<Producto> {
    return this.productosService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { name?: string; price?: number; type?: string },
  ): Promise<Producto> {
    return this.productosService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.productosService.delete(id);
  }
}
