import { Body, Controller, Post, Get, Req } from '@nestjs/common'
import RegisterDto from './dto/register.dto'
import { AuthService } from './auth.service'

import { Auth } from './decorator/auth.decorator'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) { }
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto)
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto)
  }
}
