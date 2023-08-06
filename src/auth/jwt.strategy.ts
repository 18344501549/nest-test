import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PrismService } from 'src/prism/prism.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService, private prisma: PrismService) {
    super({
      // 解析用户提交的Bearer Token Header数据
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 加密的secret
      secretOrKey: configService.get('TOKEN_SECRET'),
    })
  }

  // 验证通过后结果的用户资料
  async validate({ sub: id }) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}
