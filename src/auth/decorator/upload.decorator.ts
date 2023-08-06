import { MethodNotAllowedException, UseInterceptors, applyDecorators } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'

export function fileFilter(type: string[]) {
  return (req: any, file: any, callback: (error: Error | null, acceptFile: boolean) => void) => {
    const check = type.some((t) => file.mimetype.includes(t))
    if (!check) {
      callback(new MethodNotAllowedException('文件类型错误'), false)
    } else {
      callback(null, true)
    }
  }
}

export function Upload(field = 'file', options: MulterOptions) {
  return applyDecorators(UseInterceptors(FileInterceptor(field, options)))
}

export function UploadFiled(field = 'file', type: string[] = ['image']) {
  return Upload(field, {
    limits: {
      fieldSize: Math.pow(1024, 2) * 2,
      // 限制文件名长度为 50 bytes
      fieldNameSize: 50, // 默认 100 bytes
    },
    fileFilter: fileFilter(type),
  })
}

export function UploadDocument(field = 'file', type: string[] = ['image']) {
  return Upload(field, {
    limits: {
      fieldSize: Math.pow(1024, 2) * 5,
      // 限制文件名长度为 50 bytes
      fieldNameSize: 50, // 默认 100 bytes
    },
    fileFilter: fileFilter(type),
  })
}
