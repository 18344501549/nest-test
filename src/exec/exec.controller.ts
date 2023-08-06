import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExecService } from './exec.service'
import { CreateExecDto } from './dto/create-exec.dto'
import { UpdateExecDto } from './dto/update-exec.dto'

@Controller('exec')
export class ExecController {
  constructor(private readonly execService: ExecService) { }

  @Post()
  create(@Body() createExecDto: CreateExecDto) {
    return this.execService.create(createExecDto)
  }

  @Get()
  findAll() {
    return this.execService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.execService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExecDto: UpdateExecDto) {
    return this.execService.update(+id, updateExecDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.execService.remove(+id)
  }
}
