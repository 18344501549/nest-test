import { BadRequestException, Injectable } from '@nestjs/common'
import RegisterDto from './dto/register.dto'
import { hash, verify } from 'argon2'
import { PrismService } from 'src/prism/prism.service'
import { JwtService } from '@nestjs/jwt'
import { user } from '@prisma/client'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismService, private jwt: JwtService) { }
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })

    return user
  }

  async login(dto: LoginDto) {
    const user = this.prisma.user.findFirst({
      where: {
        name: dto.name,
      },
    })
    // 校对密码
    if (!(await verify((await user).password, dto.password))) {
      throw new BadRequestException('密码错误')
    }
    return this.token(await user)
  }

  async token({ name, id }: user) {
    return {
      token: await this.jwt.signAsync({
        name,
        sub: id,
      }),
    }
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }
}
