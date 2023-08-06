import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Role } from '../enmu'
import { RoleGuard } from '../guards/role/role.guard'

export function Auth(...roles: Role[]) {
  console.log(roles, 'roles')
  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt'), RoleGuard))
}
