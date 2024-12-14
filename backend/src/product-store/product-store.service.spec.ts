import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ProductStoreService } from './product-store.service';
import { Product } from '../product/product.schema';
import { Store } from '../store/store.schema';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';

describe('ProductStoreService', () => {
  let service: ProductStoreService;
  let productModel: jest.Mocked<Model<Product>>;
  let storeModel: jest.Mocked<Model<Store>>;

  const validProductId = '603d2149f2b3a12c8a1e8b12';
  const validStoreId = '605d2149f2b3a12c8a1e8b15';

  const mockProduct = {
    id: validProductId,
    name: 'Manzanas',
    price: 10,
    type: 'Perecedero',
    stores: [validStoreId],
    save: jest.fn().mockImplementation(function () {
      return Promise.resolve(this);
    }),
  } as any;

  const mockStore = {
    id: validStoreId,
    name: 'Tienda Principal',
    city: 'BOG',
    address: 'Calle Falsa 123',
  } as any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductStoreService,
        {
          provide: getModelToken(Product.name),
          useValue: {
            findById: jest.fn(),
            find: jest.fn(),
          },
        },
        {
          provide: getModelToken(Store.name),
          useValue: {
            findById: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductStoreService>(ProductStoreService);
    productModel = module.get(getModelToken(Product.name));
    storeModel = module.get(getModelToken(Store.name));
  });

  describe('addStoreToProduct', () => {
    it('should associate a store to a product', async () => {
      const mockProductWithoutStore = { ...mockProduct, stores: [] };

      productModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProductWithoutStore),
      } as any);

      storeModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockStore),
      } as any);

      const result = await service.addStoreToProduct(
        validProductId,
        validStoreId,
      );

      expect(result).toEqual(mockProductWithoutStore);
      expect(productModel.findById).toHaveBeenCalledWith(validProductId);
      expect(storeModel.findById).toHaveBeenCalledWith(validStoreId);
      expect(mockProductWithoutStore.save).toHaveBeenCalled();
    });

    it('should throw NotFoundException if product is not found', async () => {
      productModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(
        service.addStoreToProduct(validProductId, validStoreId),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException if store is not found', async () => {
      productModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      storeModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(
        service.addStoreToProduct(validProductId, validStoreId),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if store is already associated', async () => {
      productModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockProduct),
      } as any);

      storeModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockStore),
      } as any);

      await expect(
        service.addStoreToProduct(validProductId, validStoreId),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('findStoresFromProduct', () => {
    it('should return all stores associated with a product', async () => {
      productModel.findById.mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce({
            ...mockProduct,
            stores: [mockStore],
          }),
        }),
      } as any);

      const result = await service.findStoresFromProduct(validProductId);

      expect(result).toEqual([mockStore]);
      expect(productModel.findById).toHaveBeenCalledWith(validProductId);
    });

    it('should throw NotFoundException if product is not found', async () => {
      productModel.findById.mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce(null),
        }),
      } as any);

      await expect(
        service.findStoresFromProduct(validProductId),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('findStoreFromProduct', () => {
    it('should return a specific store associated with a product', async () => {
      productModel.findById.mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce({
            ...mockProduct,
            stores: [mockStore],
          }),
        }),
      } as any);

      const result = await service.findStoreFromProduct(
        validProductId,
        validStoreId,
      );

      expect(result).toEqual(mockStore);
      expect(productModel.findById).toHaveBeenCalledWith(validProductId);
    });

    it('should throw NotFoundException if store is not found', async () => {
      productModel.findById.mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce({
            ...mockProduct,
            stores: [],
          }),
        }),
      } as any);

      await expect(
        service.findStoreFromProduct(validProductId, validStoreId),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
