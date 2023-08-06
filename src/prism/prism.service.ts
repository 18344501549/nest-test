import { PrismaClient } from '@prisma/client'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismService extends PrismaClient {
  constructor() {
    super(process.env.NODE_ENV === 'development' ? { log: ['query'] } : {})
  }
}
