import { PartialType } from '@nestjs/mapped-types'
import { CreateExecDto } from './create-exec.dto'

export class UpdateExecDto extends PartialType(CreateExecDto) { }
