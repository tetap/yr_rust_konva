/*
 *@description: 图片操作
 *@author: zyc
 *@date-time: 2022-10-19 11:49:13
 */
import isString from 'lodash/isString'

export const ImageUtils = {
  /**
   * 文件转图片dom
   */
  async file2image(file: File) {
    const dataUrl = await this.readyFileToDataURL(file)
    const image = await this.createImage(dataUrl)
    return image
  },
  /**
   * 读取文件转为DataURL
   */
  readyFileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result as string)
        reader.onloadend = null
        reader.onerror = null
      }
      reader.onerror = (e) => {
        reject(e)
        reader.onloadend = null
        reader.onerror = null
      }
      reader.readAsDataURL(file)
    })
  },
  /**
   * 创建图片dom
   */
  createImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => {
        resolve(image)
        image.onload = null
        image.onerror = null
      }
      image.onerror = (e) => {
        reject(e)
        image.onload = null
        image.onerror = null
      }
      image.src = src
    })
  },
  /**
   * 等比缩放图片
   */
  async scaleImage2Rect(image: HTMLImageElement | string, width: number, height: number) {
    if (isString(image)) {
      image = await this.createImage(image)
    }
    const { width: imageWidth, height: imageHeight } = image
    const scale = Math.min(width / imageWidth, height / imageHeight)
    width = imageWidth * scale
    height = imageHeight * scale
    return { width, height }
  }
}
