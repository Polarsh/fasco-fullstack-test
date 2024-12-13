import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';

import { ProductosService } from './productos.service';
import { Producto } from './producto.schema';

describe('ProductosService', () => {
  let service: ProductosService;
  let model: Model<Producto>;

  const valid_id = '603d2149f2b3a12c8a1e8b12';
  const invalid_id = '1';

  const mockProduct = {
    id: 'valid_id',
    name: 'Manzanas',
    price: 10,
    type: 'Perecedero',
  };

  const mockProductArray = [mockProduct];

  const mockModel = {
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductosService,
        {
          provide: getModelToken(Producto.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<ProductosService>(ProductosService);
    model = module.get<Model<Producto>>(getModelToken(Producto.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list of products', async () => {
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(mockProductArray),
      } as any);

      const result = await service.findAll();
      expect(result).toEqual(mockProductArray);
      expect(model.find).toHaveBeenCalled();
    });

    it('should throw NotFoundException if no products are found', async () => {
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce([]),
      } as any);

      await expect(service.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return a product if found', async () => {
      jest.spyOn(mockModel, 'findById').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      const result = await service.findOne(valid_id);
      expect(result).toEqual(mockProduct);
      expect(mockModel.findById).toHaveBeenCalledWith(valid_id);
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest.spyOn(mockModel, 'findById').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.findOne(valid_id)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockModel.findById).toHaveBeenCalledWith(valid_id);
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      await expect(service.findOne(invalid_id)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const dto = { name: 'Peras', price: 12, type: 'No perecedero' };

      jest.spyOn(model, 'create').mockResolvedValueOnce({
        ...dto,
        id: valid_id,
        save: jest.fn().mockResolvedValueOnce({ ...dto, id: valid_id }),
      } as any);

      const result = await service.create(dto);

      expect(result).toEqual({ ...dto, id: valid_id });
      expect(model.create).toHaveBeenCalledWith(dto);
    });

    it('should throw BadRequestException for invalid type', async () => {
      const dto = { name: 'Peras', price: 12, type: 'InvalidType' };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a product if valid', async () => {
      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      const dto = { price: 15 };
      const result = await service.update(valid_id, dto);

      expect(result).toEqual(mockProduct);
      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(valid_id, dto, {
        new: true,
      });
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      const nonexistentId = valid_id;

      await expect(
        service.update(nonexistentId, { price: 15 }),
      ).rejects.toThrow(NotFoundException);

      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(
        nonexistentId,
        { price: 15 },
        { new: true },
      );
    });

    it('should throw BadRequestException for invalid type', async () => {
      const dto = { type: 'InvalidType' };

      await expect(service.update(valid_id, dto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('delete', () => {
    it('should delete a product if valid', async () => {
      // Mock para simular que el producto existe y es eliminado
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      const result = await service.delete(valid_id);

      expect(result).toEqual({
        message: `El producto con ID ${valid_id} fue eliminado con éxito`,
      });
      expect(model.findByIdAndDelete).toHaveBeenCalledWith(valid_id);
    });

    it('should throw NotFoundException if product does not exist', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.delete(valid_id)).rejects.toThrow(NotFoundException);
      expect(model.findByIdAndDelete).toHaveBeenCalledWith(valid_id);
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      await expect(service.delete(invalid_id)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
