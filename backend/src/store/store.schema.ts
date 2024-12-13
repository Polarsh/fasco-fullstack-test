import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Store extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, minlength: 3, maxlength: 3, uppercase: true })
  city: string;

  @Prop({ required: true })
  address: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
