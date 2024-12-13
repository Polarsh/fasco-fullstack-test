import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Producto extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, enum: ['Perecedero', 'No perecedero'] })
  type: 'Perecedero' | 'No perecedero';
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
