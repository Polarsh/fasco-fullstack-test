/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { StoreService } from './store.service';
import { getModelToken } from '@nestjs/mongoose';
import { Store } from './store.schema';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

describe('StoreService', () => {
  let service: StoreService;
  let model: Model<Store>;

  const validId = '603d2149f2b3a12c8a1e8b12';
  const invalidId = '1';
  const mockStore = {
    id: validId,
    name: 'Tienda Principal',
    city: 'BOG',
    address: 'Calle Falsa 123',
  };

  const mockStoreArray = [mockStore];

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
        StoreService,
        {
          provide: getModelToken(Store.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<StoreService>(StoreService);
    model = module.get<Model<Store>>(getModelToken(Store.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of stores', async () => {
      jest.spyOn(model, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockStoreArray),
      } as any);

      const result = await service.findAll();
      expect(result).toEqual(mockStoreArray);
      expect(model.find).toHaveBeenCalled();
    });

    it('should throw NotFoundException if no stores are found', async () => {
      jest.spyOn(model, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce([]),
      } as any);

      await expect(service.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return a store by ID', async () => {
      jest.spyOn(model, 'findById').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockStore),
      } as any);

      const result = await service.findOne(validId);
      expect(result).toEqual(mockStore);
      expect(model.findById).toHaveBeenCalledWith(validId);
    });

    it('should throw NotFoundException if store is not found', async () => {
      jest.spyOn(model, 'findById').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.findOne(validId)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      await expect(service.findOne(invalidId)).rejects.toThrow(BadRequestException);
    });
  });

  describe('create', () => {
    it('should create a new store', async () => {
      const dto = { name: 'Nueva Tienda', city: 'BOG', address: 'Calle 45' };
      jest.spyOn(model, 'create').mockResolvedValueOnce({
        ...dto,
        save: jest.fn().mockResolvedValueOnce({ ...dto, id: validId }),
      } as any);

      const result = await service.create(dto);
      expect(result).toEqual({ ...dto, id: validId });
      expect(model.create).toHaveBeenCalledWith(dto);
    });

    it('should throw BadRequestException for invalid city', async () => {
      const dto = { name: 'Nueva Tienda', city: 'INVALID', address: 'Calle 45' };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a store', async () => {
      const dto = { name: 'Tienda Actualizada', city: 'MED', address: 'Calle Nueva 123' };
      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockStore),
      } as any);

      const result = await service.update(validId, dto);
      expect(result).toEqual(mockStore);
    });

    it('should throw NotFoundException if store is not found', async () => {
      const dto = { name: 'Tienda Actualizada', city: 'MED', address: 'Calle Nueva 123' };
      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.update(validId, dto)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException for invalid city', async () => {
      const dto = { city: 'INVALID' };

      await expect(service.update(validId, dto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('delete', () => {
    it('should delete a store', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockStore),
      } as any);

      const result = await service.delete(validId);
      expect(result).toEqual({
        message: `La tienda con ID ${validId} fue eliminada con éxito`,
      });
      expect(model.findByIdAndDelete).toHaveBeenCalledWith(validId);
    });

    it('should throw NotFoundException if store is not found', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      await expect(service.delete(validId)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if ID is invalid', async () => {
      await expect(service.delete(invalidId)).rejects.toThrow(BadRequestException);
    });
  });
});
