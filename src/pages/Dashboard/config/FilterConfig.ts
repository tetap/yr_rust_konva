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
  }
]
