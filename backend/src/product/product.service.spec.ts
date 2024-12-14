import { Model } from 'mongoose';

import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { ProductService } from './product.service';
import { Product } from './product.schema';

describe('ProductService', () => {
  let service: ProductService;
  let model: Model<Product>;

  const validId = '603d2149f2b3a12c8a1e8b12';
  const invalidId = '1';
  const mockProduct = {
    id: validId,
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
        ProductService,
        {
          provide: getModelToken(Product.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    model = module.get<Model<Product>>(getModelToken(Product.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      jest.spyOn(model, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProductArray),
      } as any);

      const result = await service.findAll();
      expect(result).toEqual(mockProductArray);
      expect(model.find).toHaveBeenCalled();
    });

    it('should throw NotFoundException if no products are found', async () => {
      jest.spyOn(model, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce([]),
      } as any);

      await expect(service.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return a product by ID', async () => {
      jest.spyOn(model, 'findById').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      const result = await service.findOne(validId);
      expect(result).toEqual(mockProduct);
      expect(model.findById).toHaveBeenCalledWith(validId);
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest.spyOn(model, 'findById').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.findOne(validId)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      await expect(service.findOne(invalidId)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const dto = { name: 'Peras', price: 12, type: 'No perecedero' };
      jest.spyOn(model, 'create').mockResolvedValueOnce({
        ...dto,
        save: jest.fn().mockResolvedValueOnce({ ...dto, id: validId }),
      } as any);

      const result = await service.create(dto);
      expect(result).toEqual({ ...dto, id: validId });
      expect(model.create).toHaveBeenCalledWith(dto);
    });

    it('should throw BadRequestException for invalid type', async () => {
      const dto = { name: 'Peras', price: 12, type: 'InvalidType' };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const dto = { name: 'Manzanas Actualizadas', price: 15 };
      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      const result = await service.update(validId, dto);
      expect(result).toEqual(mockProduct);
      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(validId, dto, {
        new: true,
      });
    });

    it('should throw NotFoundException if product is not found', async () => {
      const dto = { name: 'Manzanas Actualizadas', price: 15 };
      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.update(validId, dto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException for invalid type', async () => {
      const dto = { type: 'InvalidType' };

      await expect(service.update(validId, dto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('delete', () => {
    it('should delete a product', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      const result = await service.delete(validId);
      expect(result).toEqual({
        message: `El producto con ID ${validId} fue eliminado con éxito`,
      });
      expect(model.findByIdAndDelete).toHaveBeenCalledWith(validId);
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.delete(validId)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      await expect(service.delete(invalidId)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
