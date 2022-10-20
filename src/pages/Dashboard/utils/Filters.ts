import initWasm, { grayscale, threshold, to_canny } from '@wasm/image'

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
  Canny: (imageData: ImageData) => imageData.data.set(to_canny(imageData, 30.0, 300.0))
}
