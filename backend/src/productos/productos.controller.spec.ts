import { Test, TestingModule } from '@nestjs/testing';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { NotFoundException } from '@nestjs/common';

describe('ProductosController', () => {
  let controller: ProductosController;
  let service: ProductosService;

  const mockProduct = {
    id: 'valid_id',
    name: 'Manzanas',
    price: 10,
    type: 'Perecedero',
  };

  const mockService = {
    findAll: jest.fn().mockResolvedValue([mockProduct]),
    findOne: jest.fn().mockImplementation((id: string) => {
      if (id === 'valid_id') return Promise.resolve(mockProduct);
      throw new NotFoundException();
    }),
    create: jest
      .fn()
      .mockImplementation((dto) => Promise.resolve({ ...dto, id: 'new_id' })),
    update: jest.fn().mockImplementation((id: string, dto) => {
      if (id === 'valid_id') return Promise.resolve({ ...mockProduct, ...dto });
      throw new NotFoundException();
    }),
    delete: jest.fn().mockImplementation((id: string) => {
      if (id === 'valid_id')
        return Promise.resolve({
          message: `El producto con ID ${id} fue eliminado con éxito`,
        });
      throw new NotFoundException();
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductosController],
      providers: [
        {
          provide: ProductosService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ProductosController>(ProductosController);
    service = module.get<ProductosService>(ProductosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list of products', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([mockProduct]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a product if found', async () => {
      const result = await controller.findOne('valid_id');
      expect(result).toEqual(mockProduct);
      expect(service.findOne).toHaveBeenCalledWith('valid_id');
    });

    it('should throw NotFoundException if product is not found', async () => {
      await expect(controller.findOne('invalid_id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const dto = { name: 'Peras', price: 12, type: 'No perecedero' };
      const result = await controller.create(dto);
      expect(result).toEqual({ ...dto, id: 'new_id' });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('update', () => {
    it('should update a product if valid', async () => {
      const dto = { price: 15 };
      const result = await controller.update('valid_id', dto);
      expect(result).toEqual({ ...mockProduct, ...dto });
      expect(service.update).toHaveBeenCalledWith('valid_id', dto);
    });

    it('should throw NotFoundException if product is not found', async () => {
      await expect(
        controller.update('invalid_id', { price: 15 }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('delete', () => {
    it('should delete a product if valid', async () => {
      const result = await controller.delete('valid_id');
      expect(result).toEqual({
        message: `El producto con ID valid_id fue eliminado con éxito`,
      });
      expect(service.delete).toHaveBeenCalledWith('valid_id');
    });

    it('should throw NotFoundException if product is not found', async () => {
      await expect(controller.delete('invalid_id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
