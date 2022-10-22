/*
 *@description: 滤镜配置
 *@author: zyc
 *@date-time: 2022-10-19 14:44:21
 */
import { ISiderPropsDataItem } from '../components'
import { Filters } from '../utils/Filters'

export type FilterConfigType = ISiderPropsDataItem<number> & { handle(imageData: ImageData): void }

export const FilterConfig: FilterConfigType[] = [
  {
    title: '灰度',
    value: 1,
    handle: Filters.Grayscale
  },
  {
    title: '黑白',
    value: 2,
    handle: Filters.Threshold
  },
  {
    title: 'Canny',
    value: 3,
    handle: Filters.Canny
  },
  {
    title: '绘画',
    value: 4,
    handle: Filters.Painting
  },
  {
    title: '垂直翻转',
    value: 5,
    handle: Filters.flipVertical
  },
  {
    title: '水平翻转',
    value: 6,
    handle: Filters.flipHorizontal
  },
  {
    title: '反色',
    value: 7,
    handle: Filters.inverse
  },
  {
    title: '扩散',
    value: 8,
    handle: (imageData: ImageData) => {
      const start = Date.now()
      Filters.floyd_steinberg(imageData)
      console.log('wasm floyd_steinberg time:', Date.now() - start)
    }
  },
  {
    title: 'js扩散',
    value: 9,
    /**
     * js floyd_steinberg扩散算法
     */
    handle: (imageData: ImageData) => {
      const start = Date.now()
      Filters.floyd_steinberg(imageData)
      const { width, height, data } = imageData
      const luminance = new Uint8ClampedArray(width * height)
      let l, i
      for (l = 0, i = 0; i < data.length; l++, i += 4) {
        luminance[l] = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114
      }
      for (l = 0, i = 0; i < data.length; l++, i += 4) {
        const value = luminance[l] < 129 ? 0 : 255
        const error = Math.floor((luminance[l] - value) >> 4)
        data.fill(value, i, i + 3)
        luminance[l + 1] += error * 7
        luminance[l + width - 1] += error * 3
        luminance[l + width] += error * 5
        luminance[l + width + 1] += error * 1
      }
      console.log('js floyd_steinberg time:', Date.now() - start)
    }
  }
]
