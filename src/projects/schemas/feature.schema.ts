import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Feature {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  description: string;
}

export const FeatureSchema = SchemaFactory.createForClass(Feature);
