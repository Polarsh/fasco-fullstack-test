import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from '../product/product.schema';
import { ProductStoreService } from './product-store.service';
import { Store } from 'src/store/store.schema';

@Controller('products/:productId/stores')
export class ProductStoreController {
  constructor(private readonly productStoreService: ProductStoreService) {}

  @Post(':storeId')
  async addStoreToProduct(
    @Param('productId') productId: string,
    @Param('storeId') storeId: string,
  ): Promise<Product> {
    return this.productStoreService.addStoreToProduct(productId, storeId);
  }

  @Get()
  async findStoresFromProduct(
    @Param('productId') productId: string,
  ): Promise<Store[]> {
    return this.productStoreService.findStoresFromProduct(productId);
  }

  @Get(':storeId')
  async findStoreFromProduct(
    @Param('productId') productId: string,
    @Param('storeId') storeId: string,
  ): Promise<Store> {
    return this.productStoreService.findStoreFromProduct(productId, storeId);
  }

  @Put()
  async updateStoresFromProduct(
    @Param('productId') productId: string,
    @Body() storeIds: string[],
  ): Promise<Product> {
    return this.productStoreService.updateStoresFromProduct(
      productId,
      storeIds,
    );
  }

  @Delete(':storeId')
  async deleteStoreFromProduct(
    @Param('productId') productId: string,
    @Param('storeId') storeId: string,
  ): Promise<Product> {
    return this.productStoreService.deleteStoreFromProduct(productId, storeId);
  }
}
