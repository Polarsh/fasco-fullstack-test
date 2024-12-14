import { NotFoundException, BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { ProductStoreController } from './product-store.controller';
import { ProductStoreService } from './product-store.service';

import { Product } from 'src/product/product.schema';
import { Store } from 'src/store/store.schema';

describe('ProductStoreController', () => {
  let controller: ProductStoreController;
  let service: ProductStoreService;

  const validProductId = '603d2149f2b3a12c8a1e8b12';
  const validStoreId = '605d2149f2b3a12c8a1e8b15';
  const invalidId = '1';

  const mockProduct: Product = {
    id: validProductId,
    name: 'Manzanas',
    price: 10,
    type: 'Perecedero',
    stores: [validStoreId],
  } as any;

  const mockStore: Store = {
    id: validStoreId,
    name: 'Tienda Principal',
    city: 'BOG',
    address: 'Calle Falsa 123',
  } as any;

  const mockStoreArray = [mockStore];

  const mockService = {
    addStoreToProduct: jest.fn().mockResolvedValue(mockProduct),
    findStoresFromProduct: jest.fn().mockResolvedValue(mockStoreArray),
    findStoreFromProduct: jest.fn().mockResolvedValue(mockStore),
    updateStoresFromProduct: jest.fn().mockResolvedValue(mockProduct),
    deleteStoreFromProduct: jest.fn().mockResolvedValue(mockProduct),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductStoreController],
      providers: [
        {
          provide: ProductStoreService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ProductStoreController>(ProductStoreController);
    service = module.get<ProductStoreService>(ProductStoreService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('addStoreToProduct', () => {
    it('should associate a store to a product', async () => {
      const result = await controller.addStoreToProduct(
        validProductId,
        validStoreId,
      );
      expect(result).toEqual(mockProduct);
      expect(service.addStoreToProduct).toHaveBeenCalledWith(
        validProductId,
        validStoreId,
      );
    });

    it('should throw NotFoundException if product or store is not found', async () => {
      jest
        .spyOn(service, 'addStoreToProduct')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(
        controller.addStoreToProduct(validProductId, validStoreId),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('findStoresFromProduct', () => {
    it('should return all stores associated with a product', async () => {
      const result = await controller.findStoresFromProduct(validProductId);
      expect(result).toEqual(mockStoreArray);
      expect(service.findStoresFromProduct).toHaveBeenCalledWith(
        validProductId,
      );
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest
        .spyOn(service, 'findStoresFromProduct')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(
        controller.findStoresFromProduct(validProductId),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('findStoreFromProduct', () => {
    it('should return a specific store associated with a product', async () => {
      const result = await controller.findStoreFromProduct(
        validProductId,
        validStoreId,
      );
      expect(result).toEqual(mockStore);
      expect(service.findStoreFromProduct).toHaveBeenCalledWith(
        validProductId,
        validStoreId,
      );
    });

    it('should throw NotFoundException if store is not found', async () => {
      jest
        .spyOn(service, 'findStoreFromProduct')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(
        controller.findStoreFromProduct(validProductId, validStoreId),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('updateStoresFromProduct', () => {
    it('should update stores associated with a product', async () => {
      const storeIds = [validStoreId];
      const result = await controller.updateStoresFromProduct(
        validProductId,
        storeIds,
      );
      expect(result).toEqual(mockProduct);
      expect(service.updateStoresFromProduct).toHaveBeenCalledWith(
        validProductId,
        storeIds,
      );
    });

    it('should throw BadRequestException if store IDs are invalid', async () => {
      jest
        .spyOn(service, 'updateStoresFromProduct')
        .mockRejectedValueOnce(new BadRequestException());
      await expect(
        controller.updateStoresFromProduct(validProductId, [invalidId]),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('deleteStoreFromProduct', () => {
    it('should delete a store associated with a product', async () => {
      const result = await controller.deleteStoreFromProduct(
        validProductId,
        validStoreId,
      );
      expect(result).toEqual(mockProduct);
      expect(service.deleteStoreFromProduct).toHaveBeenCalledWith(
        validProductId,
        validStoreId,
      );
    });

    it('should throw NotFoundException if store is not found', async () => {
      jest
        .spyOn(service, 'deleteStoreFromProduct')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(
        controller.deleteStoreFromProduct(validProductId, validStoreId),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
