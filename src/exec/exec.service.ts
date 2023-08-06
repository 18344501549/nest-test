import { Injectable } from '@nestjs/common'
import { CreateExecDto } from './dto/create-exec.dto'
import { UpdateExecDto } from './dto/update-exec.dto'
import { PrismService } from 'src/prism/prism.service'

@Injectable()
export class ExecService {
  constructor(private prisma: PrismService) { }
  async create(reateExecDto: CreateExecDto) {
    return 'This action adds a new exec'
  }

  findAll() {
    return `This action returns all exec`
  }

  findOne(id: number) {
    return `This action returns a #${id} exec`
  }

  update(id: number, updateExecDto: UpdateExecDto) {
    return `This action updates a #${id} exec`
  }

  remove(id: number) {
    return `This action removes a #${id} exec`
  }
}
