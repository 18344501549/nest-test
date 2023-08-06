import { Module } from '@nestjs/common'
import { ExecService } from './exec.service'
import { ExecController } from './exec.controller'

@Module({
  controllers: [ExecController],
  providers: [ExecService],
})
export class ExecModule { }
