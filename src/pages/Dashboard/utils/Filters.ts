import initWasm, {
  grayscale,
  threshold,
  canny,
  painting,
  flip,
  inverse,
  floyd_steinberg
} from '@wasm/image'

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
   * 提取边缘
   */
  Canny: (imageData: ImageData) => imageData.data.set(canny(imageData, 50.0, 100.0)),
  /**
   * 绘画风格
   */
  Painting: (imageData: ImageData) => imageData.data.set(painting(imageData, 15.0)),
  /**
   * 垂直翻转
   */
  flipVertical: (imageData: ImageData) => imageData.data.set(flip(imageData, false, true)),
  /**
   * 水平翻转
   */
  flipHorizontal: (imageData: ImageData) => imageData.data.set(flip(imageData, true, false)),
  /**
   * 反色
   */
  inverse: (imageData: ImageData) => imageData.data.set(inverse(imageData)),
  /**
   * floyd_steinberg扩散算法
   */
  floyd_steinberg: (imageData: ImageData) => imageData.data.set(floyd_steinberg(imageData))
}
