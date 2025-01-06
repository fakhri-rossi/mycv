import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type SkillDocument = HydratedDocument<Skill>;

@Schema()
export class Skill {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  category?: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
