import { Document } from 'mongoose';

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, enum: ['Perecedero', 'No perecedero'] })
  type: 'Perecedero' | 'No perecedero';
}

export const ProductSchema = SchemaFactory.createForClass(Product);
