import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { PrismModule } from './prism/prism.module'
import { UploadModule } from './upload/upload.module'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'
import { ExecModule } from './exec/exec.module'

@Module({
  imports: [
    AuthModule,
    PrismModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UploadModule,
    ArticleModule,
    CategoryModule,
    ExecModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
