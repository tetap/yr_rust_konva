import initWasm, { grayscale, threshold, to_canny, painting, flip } from '@wasm/image'

export const Filters = {
  is_init: false,
  async init() {
    if (!this.is_init) {
      await initWasm()
      this.is_init = true
    }
    return this
  },
  /**
   * 灰度
   */
  Grayscale: (imageData: ImageData) => imageData.data.set(grayscale(imageData)),
  /**
   * 二值化
   */
  Threshold: (imageData: ImageData) => imageData.data.set(threshold(imageData, 128)),
  /**
   * 提取边缘 目前还有问题 #TODO： 修复提取边缘问题
   */
  Canny: (imageData: ImageData) => imageData.data.set(to_canny(imageData, 30.0, 300.0)),
  /**
   * 绘画风格
   */
  Painting: (imageData: ImageData) => imageData.data.set(painting(imageData, 25)),
  /**
   * 垂直翻转
   */
  flipVertical: (imageData: ImageData) => imageData.data.set(flip(imageData, false, true)),
  /**
   * 水平翻转
   */
  flipHorizontal: (imageData: ImageData) => imageData.data.set(flip(imageData, true, false))
}
