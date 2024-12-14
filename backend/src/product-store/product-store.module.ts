import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from 'src/product/product.schema';
import { Store, StoreSchema } from 'src/store/store.schema';
import { ProductStoreController } from './product-store.controller';
import { ProductStoreService } from './product-store.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Store.name, schema: StoreSchema },
    ]),
  ],
  controllers: [ProductStoreController],
  providers: [ProductStoreService],
})
export class ProductStoreModule {}
