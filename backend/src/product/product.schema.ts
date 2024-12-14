import { Document, Types } from 'mongoose';

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, enum: ['Perecedero', 'No perecedero'] })
  type: 'Perecedero' | 'No perecedero';

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Store' }] })
  stores: Types.ObjectId[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
