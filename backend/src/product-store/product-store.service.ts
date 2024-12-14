import { Model } from 'mongoose';

import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from '../product/product.schema';
import { Store } from '../store/store.schema';

@Injectable()
export class ProductStoreService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(Store.name) private storeModel: Model<Store>,
  ) {}

  async addStoreToProduct(
    productId: string,
    storeId: string,
  ): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException(
        `Producto con ID ${productId} no encontrado.`,
      );
    }

    const store = await this.storeModel.findById(storeId).exec();
    if (!store) {
      throw new NotFoundException(`Tienda con ID ${storeId} no encontrada.`);
    }

    if (product.stores.includes(storeId as any)) {
      throw new BadRequestException(
        `La tienda con ID ${storeId} ya está asociada al producto.`,
      );
    }

    product.stores.push(storeId as any);
    return product.save();
  }

  async findStoresFromProduct(productId: string): Promise<Store[]> {
    const product = await this.productModel
      .findById(productId)
      .populate({
        path: 'stores', // Campo a poblar
        model: 'Store', // Modelo de referencia
      })
      .exec();

    if (!product) {
      throw new NotFoundException(
        `Producto con ID ${productId} no encontrado.`,
      );
    }

    return product.stores as unknown as Store[];
  }

  async findStoreFromProduct(
    productId: string,
    storeId: string,
  ): Promise<Store> {
    const product = await this.productModel
      .findById(productId)
      .populate('stores')
      .exec();

    if (!product) {
      throw new NotFoundException(
        `Producto con ID ${productId} no encontrado.`,
      );
    }

    const store = (product.stores as unknown as Store[]).find(
      (store) => store.id === storeId,
    );

    if (!store) {
      throw new NotFoundException(
        `Tienda con ID ${storeId} no ofrece el producto con ID ${productId}.`,
      );
    }

    return store;
  }

  async updateStoresFromProduct(
    productId: string,
    storeIds: string[],
  ): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();

    if (!product) {
      throw new NotFoundException(
        `Producto con ID ${productId} no encontrado.`,
      );
    }

    const validStores = await this.storeModel
      .find({ _id: { $in: storeIds } })
      .exec();

    if (validStores.length !== storeIds.length) {
      throw new BadRequestException(
        'Algunas de las tiendas proporcionadas no existen.',
      );
    }

    product.stores = storeIds as any[];
    return product.save();
  }

  async deleteStoreFromProduct(
    productId: string,
    storeId: string,
  ): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException(
        `Producto con ID ${productId} no encontrado.`,
      );
    }

    if (!product.stores.includes(storeId as any)) {
      throw new NotFoundException(
        `La tienda con ID ${storeId} no está asociada al producto.`,
      );
    }

    product.stores = product.stores.filter(
      (id) => id.toString() !== storeId,
    ) as any[];
    return product.save();
  }
}
