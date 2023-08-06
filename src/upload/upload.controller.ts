import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { TransformInterceptor } from '../TarnsformInterceptor/TarnsformInterceptor'
import { UploadFiled } from 'src/auth/decorator/upload.decorator'
import { PrismService } from 'src/prism/prism.service'
// 导入七牛云 SDK
import * as qiniu from 'qiniu'
import { qiniuConfig } from './qiniu.config'
import { Random } from 'mockjs'

const key = Random.string(1, 2) // 上传后的文件名

const mac = new qiniu.auth.digest.Mac(qiniuConfig.accessKey, qiniuConfig.secretKey)
const putPolicy = new qiniu.rs.PutPolicy(qiniuConfig.option)
const uploadToken = putPolicy.uploadToken(mac)

@Controller('upload')
@UseInterceptors(new TransformInterceptor())
export class UploadController {
  constructor(private prisma: PrismService) { }
  // @Post('image')
  // @UploadFiled()
  // image(@UploadedFile() file: Express.Multer.File) {
  //   return file
  // }

  // @Post('markdown')
  // @UploadFiled('file', ['markdown'])
  // markdown(@UploadedFile() file: Express.Multer.File) {
  //   return file
  // }

  // @Post('document')
  // @UploadFiled('file', ['document'])
  // document(@UploadedFile() file: Express.Multer.File) {
  //   return file
  // }

  @Post('pdf')
  @UploadFiled('file', ['pdf', 'document', 'image'])
  PDF(@UploadedFile() file: Express.Multer.File) {
    const config = new qiniu.conf.Config()
    const formUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()

    formUploader.putFile(
      uploadToken,
      key,
      qiniuConfig.localFilePath + file.path,
      putExtra,
      function (respErr, respBody, respInfo) {
        if (respErr) {
          throw respErr
        }
        if (respInfo.statusCode === 200) {
          console.log('上传成功！')
        } else {
          console.log('上传失败！')
        }
      },
    )
    return file
  }
}
