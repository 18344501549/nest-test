import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { Auth } from 'src/auth/decorator/auth.decorator'
import { Role } from 'src/auth/enmu'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Post('add')
  @Auth(Role.ADMIN)
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @Get('list')
  findAll() {
    return this.articleService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto)
  }

  @Delete('del/:id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id)
  }
}
