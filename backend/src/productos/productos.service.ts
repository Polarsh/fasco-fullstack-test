import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './producto.schema';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name) private productoModel: Model<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    const products = await this.productoModel.find().exec();
    if (products.length === 0) {
      throw new NotFoundException('No hay productos disponibles para mostrar');
    }
    return products;
  }

  async findOne(id: string): Promise<Producto> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El ID proporcionado (${id}) no es válido`);
    }

    const product = await this.productoModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product;
  }

  async create(data: {
    name: string;
    price: number;
    type: string;
  }): Promise<Producto> {
    const { type, name, price } = data;

    // Validar el tipo
    if (!['Perecedero', 'No perecedero'].includes(type)) {
      throw new BadRequestException(
        'Tipo de producto inválido. Debe ser Perecedero o No perecedero',
      );
    }

    // Validar campos requeridos
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new BadRequestException(
        'El nombre del producto es obligatorio y debe ser una cadena no vacía.',
      );
    }

    if (price === undefined || typeof price !== 'number' || price < 0) {
      throw new BadRequestException(
        'El precio del producto es obligatorio y debe ser un número mayor o igual a 0.',
      );
    }

    // Crear producto
    const newProduct = await this.productoModel.create(data);
    return newProduct.save();
  }

  async update(
    id: string,
    data: { name?: string; price?: number; type?: string },
  ): Promise<Producto> {
    const { type, name, price } = data;

    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El ID proporcionado (${id}) no es válido`);
    }

    // Validar el tipo si se proporciona
    if (type && !['Perecedero', 'No perecedero'].includes(type)) {
      throw new BadRequestException(
        'Tipo de producto inválido. Debe ser Perecedero o No perecedero',
      );
    }

    // Validar el nombre si se proporciona
    if (
      name !== undefined &&
      (typeof name !== 'string' || name.trim() === '')
    ) {
      throw new BadRequestException(
        'El nombre del producto debe ser una cadena no vacía.',
      );
    }

    // Validar el precio si se proporciona
    if (price !== undefined && (typeof price !== 'number' || price < 0)) {
      throw new BadRequestException(
        'El precio del producto debe ser un número mayor o igual a 0.',
      );
    }

    // Actualizar el producto
    const product = await this.productoModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    // Validar si el producto existe
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    return product;
  }

  async delete(id: string): Promise<{ message: string }> {
    // Validar si el ID es un ObjectId válido
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El ID proporcionado (${id}) no es válido`);
    }

    // Eliminar el producto
    const result = await this.productoModel.findByIdAndDelete(id).exec();

    // Verificar si el producto existía
    if (!result) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    // Responder con mensaje de éxito
    return { message: `El producto con ID ${id} fue eliminado con éxito` };
  }
}
