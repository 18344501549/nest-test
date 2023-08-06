import { Global, Module } from '@nestjs/common'
import { PrismService } from './prism.service'

@Global()
@Module({
  providers: [PrismService],
  exports: [PrismService],
})
export class PrismModule { }
