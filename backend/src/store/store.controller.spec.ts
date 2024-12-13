/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('StoreController', () => {
  let controller: StoreController;
  let service: StoreService;

  const mockStore = {
    id: '603d2149f2b3a12c8a1e8b12',
    name: 'Tienda Principal',
    city: 'BOG',
    address: 'Calle Falsa 123',
  };

  const mockStoreArray = [mockStore];

  const mockService = {
    findAll: jest.fn().mockResolvedValue(mockStoreArray),
    findOne: jest.fn().mockResolvedValue(mockStore),
    create: jest.fn().mockResolvedValue(mockStore),
    update: jest.fn().mockResolvedValue(mockStore),
    delete: jest.fn().mockResolvedValue({
      message: `La tienda con ID ${mockStore.id} fue eliminada con éxito.`,
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreController],
      providers: [
        {
          provide: StoreService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<StoreController>(StoreController);
    service = module.get<StoreService>(StoreService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of stores', async () => {
      const result = await controller.findAll();
      expect(result).toEqual(mockStoreArray);
      expect(service.findAll).toHaveBeenCalled();
    });

    it('should throw NotFoundException if no stores are found', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return a store by ID', async () => {
      const result = await controller.findOne(mockStore.id);
      expect(result).toEqual(mockStore);
      expect(service.findOne).toHaveBeenCalledWith(mockStore.id);
    });

    it('should throw NotFoundException if store is not found', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.findOne('nonexistent_id')).rejects.toThrow(
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
    it('should create a new store', async () => {
      const dto = { name: 'Nueva Tienda', city: 'SMR', address: 'Calle 45' };
      const result = await controller.create(dto);
      expect(result).toEqual(mockStore);
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('should throw BadRequestException for invalid data', async () => {
      const dto = { name: '', city: 'ABC', address: '' }; // Datos inválidos
      jest
        .spyOn(service, 'create')
        .mockRejectedValueOnce(new BadRequestException());
      await expect(controller.create(dto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a store', async () => {
      const dto = {
        name: 'Tienda Actualizada',
        city: 'MED',
        address: 'Calle Nueva 123',
      };
      const result = await controller.update(mockStore.id, dto);
      expect(result).toEqual(mockStore);
      expect(service.update).toHaveBeenCalledWith(mockStore.id, dto);
    });

    it('should throw NotFoundException if store is not found', async () => {
      const dto = {
        name: 'Tienda Actualizada',
        city: 'MED',
        address: 'Calle Nueva 123',
      };
      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.update('nonexistent_id', dto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException for invalid data', async () => {
      const dto = { name: '', city: 'INVALID', address: '' }; // Datos inválidos
      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new BadRequestException());
      await expect(controller.update(mockStore.id, dto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('delete', () => {
    it('should delete a store', async () => {
      const result = await controller.delete(mockStore.id);
      expect(result).toEqual({
        message: `La tienda con ID ${mockStore.id} fue eliminada con éxito.`,
      });
      expect(service.delete).toHaveBeenCalledWith(mockStore.id);
    });

    it('should throw NotFoundException if store is not found', async () => {
      jest
        .spyOn(service, 'delete')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.delete('nonexistent_id')).rejects.toThrow(
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
