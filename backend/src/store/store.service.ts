/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Store } from './store.schema';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private storeModel: Model<Store>) {}

  async findAll(): Promise<Store[]> {
    const stores = await this.storeModel.find().exec();
    if (stores.length === 0) {
      throw new NotFoundException('No hay tiendas disponibles para mostrar');
    }
    return stores;
  }

  async findOne(id: string): Promise<Store> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El ID proporcionado (${id}) no es válido`);
    }

    const store = await this.storeModel.findById(id).exec();
    if (!store) {
      throw new NotFoundException(`Tienda con ID ${id} no encontrada`);
    }
    return store;
  }

  async create(data: {
    name: string;
    city: string;
    address: string;
  }): Promise<Store> {
    const { name, city, address } = data;

    // Validar la ciudad
    if (!this.isValidCity(city)) {
      throw new BadRequestException(
        'La ciudad debe ser un código de tres caracteres (e.g., SMR, BOG, MED).',
      );
    }

    // Validar campos requeridos
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new BadRequestException(
        'El nombre de la tienda es obligatorio y debe ser una cadena no vacía.',
      );
    }

    if (!address || typeof address !== 'string' || address.trim() === '') {
      throw new BadRequestException(
        'La dirección de la tienda es obligatoria y debe ser una cadena no vacía.',
      );
    }

    // Crear tienda
    const newStore = await this.storeModel.create(data);
    return newStore.save();
  }

  async update(
    id: string,
    data: { name?: string; city?: string; address?: string },
  ): Promise<Store> {
    const { name, city, address } = data;

    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El ID proporcionado (${id}) no es válido`);
    }

    // Validar la ciudad si se proporciona
    if (city && !this.isValidCity(city)) {
      throw new BadRequestException(
        'La ciudad debe ser un código de tres caracteres (e.g., SMR, BOG, MED).',
      );
    }

    // Validar el nombre si se proporciona
    if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
      throw new BadRequestException(
        'El nombre de la tienda debe ser una cadena no vacía.',
      );
    }

    // Validar la dirección si se proporciona
    if (
      address !== undefined &&
      (typeof address !== 'string' || address.trim() === '')
    ) {
      throw new BadRequestException(
        'La dirección de la tienda debe ser una cadena no vacía.',
      );
    }

    // Actualizar la tienda
    const store = await this.storeModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    // Validar si la tienda existe
    if (!store) {
      throw new NotFoundException(`Tienda con ID ${id} no encontrada`);
    }

    return store;
  }

  async delete(id: string): Promise<{ message: string }> {
    // Validar si el ID es un ObjectId válido
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El ID proporcionado (${id}) no es válido`);
    }

    // Eliminar la tienda
    const result = await this.storeModel.findByIdAndDelete(id).exec();

    // Verificar si la tienda existía
    if (!result) {
      throw new NotFoundException(`Tienda con ID ${id} no encontrada`);
    }

    // Responder con mensaje de éxito
    return { message: `La tienda con ID ${id} fue eliminada con éxito` };
  }

  private isValidCity(city: string): boolean {
    return /^[A-Z]{3}$/.test(city); // Valida que sea exactamente 3 letras mayúsculas
  }
}
