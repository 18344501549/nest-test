import { Injectable } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { PrismService } from 'src/prism/prism.service'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismService, private config: ConfigService) { }

  async create(createArticleDto: CreateArticleDto) {
    return await this.prisma.article.create({
      data: {
        title: createArticleDto.title,
        content: createArticleDto.content,
        categoryId: +createArticleDto.categoryId,
      },
    })
  }

  async findAll(page = 1) {
    const row = this.config.get('ARTICLE_PAGE_ROW')

    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * row,
      take: +row,
    })
    return {
      meta: {
        page,
        row,
        total: await this.prisma.article.count(),
      },
      data: articles,
    }
  }

  findOne(id: number) {
    return this.prisma.article.findFirst({
      where: {
        id,
      },
    })
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: {
        title: updateArticleDto.title,
        content: updateArticleDto.content,
        categoryId: updateArticleDto.categoryId,
      },
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: { id },
    })
  }
}
