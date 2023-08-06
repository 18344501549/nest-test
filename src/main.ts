import { NestApplication, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import Validate from './common/validate'
import { TransformInterceptor } from './TarnsformInterceptor/TarnsformInterceptor'
async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule)
  app.useGlobalPipes(new Validate())

  app.enableCors()
  app.useStaticAssets('uploads', { prefix: '/uploads' })
  app.useGlobalInterceptors(new TransformInterceptor())
  app.setGlobalPrefix('api')
  await app.listen(3000)
}
bootstrap()
