import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoSchema } from './producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producto.name, schema: ProductoSchema },
    ]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
