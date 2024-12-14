import { NotFoundException, BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  const validId = '603d2149f2b3a12c8a1e8b12';
  const mockProduct = {
    id: validId,
    name: 'Manzanas',
    price: 10,
    type: 'Perecedero',
  };

  const mockProductArray = [mockProduct];

  const mockService = {
    findAll: jest.fn().mockResolvedValue(mockProductArray),
    findOne: jest.fn().mockResolvedValue(mockProduct),
    create: jest.fn().mockResolvedValue(mockProduct),
    update: jest.fn().mockResolvedValue(mockProduct),
    delete: jest.fn().mockResolvedValue({
      message: `El producto con ID ${validId} fue eliminado con éxito`,
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await controller.findAll();
      expect(result).toEqual(mockProductArray);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a product by ID', async () => {
      const result = await controller.findOne(validId);
      expect(result).toEqual(mockProduct);
      expect(service.findOne).toHaveBeenCalledWith(validId);
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.findOne(validId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockRejectedValueOnce(new BadRequestException());
      await expect(controller.findOne('1')).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const dto = { name: 'Peras', price: 12, type: 'No perecedero' };
      const result = await controller.create(dto);
      expect(result).toEqual(mockProduct);
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('should throw BadRequestException for invalid data', async () => {
      const dto = { name: '', price: -5, type: 'InvalidType' };
      jest
        .spyOn(service, 'create')
        .mockRejectedValueOnce(new BadRequestException());
      await expect(controller.create(dto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const dto = { name: 'Peras Actualizadas', price: 15 };
      const result = await controller.update(validId, dto);
      expect(result).toEqual(mockProduct);
      expect(service.update).toHaveBeenCalledWith(validId, dto);
    });

    it('should throw NotFoundException if product is not found', async () => {
      const dto = { name: 'Peras Actualizadas', price: 15 };
      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.update(validId, dto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException for invalid data', async () => {
      const dto = { type: 'InvalidType' };
      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new BadRequestException());
      await expect(controller.update(validId, dto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('delete', () => {
    it('should delete a product', async () => {
      const result = await controller.delete(validId);
      expect(result).toEqual({
        message: `El producto con ID ${validId} fue eliminado con éxito`,
      });
      expect(service.delete).toHaveBeenCalledWith(validId);
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest
        .spyOn(service, 'delete')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.delete(validId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      jest
        .spyOn(service, 'delete')
        .mockRejectedValueOnce(new BadRequestException());
      await expect(controller.delete('1')).rejects.toThrow(BadRequestException);
    });
  });
});
