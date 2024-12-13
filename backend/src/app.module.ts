import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';
import { TiendasModule } from './tiendas/tiendas.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carga las variables .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    ProductosModule,
    TiendasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor() {}

  async onModuleInit() {
    console.log('🚀 Conexión con MongoDB exitosa');
  }
}
