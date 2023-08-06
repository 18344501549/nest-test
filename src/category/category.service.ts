import { Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PrismService } from 'src/prism/prism.service'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismService) { }
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.prisma.category.create({
      data: {
        title: createCategoryDto.title,
      },
    })
  }

  async findAll() {
    return await this.prisma.category.findMany({})
  }

  findOne(id: number) {
    return this.prisma.category.findFirst({
      where: {
        id,
      },
    })
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: {
        title: updateCategoryDto.title,
      },
    })
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: { id },
    })
  }
}
