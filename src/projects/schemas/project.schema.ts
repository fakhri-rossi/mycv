import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Feature, FeatureSchema } from './feature.schema';

@Schema()
export class Project {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  jobDesk: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  involvedSkills: string[];

  @Prop()
  productionUrl: string;

  @Prop()
  sourceCodeUrl: string;

  @Prop([FeatureSchema])
  features: Feature[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

export type ProjectDocumentOverride = {
  features: Types.Subdocument<Types.ObjectId & Feature>;
};

export type ProjectDocument = HydratedDocument<
  Project,
  ProjectDocumentOverride
>;
