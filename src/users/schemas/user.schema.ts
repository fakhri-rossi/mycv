import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Project, ProjectSchema } from 'src/projects/schemas/project.schema';
import { Skill, SkillSchema } from 'src/skills/schemas/skill.schema';
import {
  Certificate,
  CertificateSchema,
} from 'src/certificates/schemas/certificate.schema';

@Schema()
export class User {
  _id: Types.ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  fullName: string;

  @Prop()
  job: string;

  @Prop()
  summary: string;

  @Prop(
    raw({
      github: { type: String },
      phone: { type: String },
      email: { type: String },
    }),
  )
  contact: Record<string, any>;

  @Prop([ProjectSchema])
  projects: Project[];

  @Prop([SkillSchema])
  skills: Skill[];

  @Prop([CertificateSchema])
  certificates: Certificate[];
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  },
});

export { UserSchema };

export type UserDocumentOverride = {
  projects: Types.Subdocument<Types.ObjectId & Project>;
  skills: Types.Subdocument<Types.ObjectId & Skill>;
  certificates: Types.Subdocument<Types.ObjectId & Certificate>;
};

export type UserDocument = HydratedDocument<User, UserDocumentOverride>;
