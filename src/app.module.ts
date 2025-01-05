import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DB_CONFIG } from './common/config/config';
import { ProjectModule } from './projects/project.module';
import { SkillModule } from './skills/skill.module';
import { CertificateModule } from './certificates/certificate.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(DB_CONFIG.URI),
    ProjectModule,
    SkillModule,
    CertificateModule,
  ],
})
export class AppModule {}
