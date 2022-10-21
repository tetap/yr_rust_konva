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
  }
]
