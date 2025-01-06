import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CertificateDocument = HydratedDocument<Certificate>;

@Schema()
export class Certificate {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  publisher: string;

  @Prop()
  type: string;

  @Prop()
  validationUrl: string;

  @Prop()
  imageUrl: string;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);
