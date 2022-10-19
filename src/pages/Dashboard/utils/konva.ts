import Konva from 'konva'
import { ImageUtils } from './image'

export class KonvaUtils {
  protected static instance: KonvaUtils
  static getInstance() {
    if (!KonvaUtils.instance) {
      KonvaUtils.instance = new KonvaUtils()
    }
    return KonvaUtils.instance
  }
  Stage: Konva.Stage | null = null
  setStage(stage: Konva.Stage) {
    this.Stage = stage
    return this
  }
  setLayer() {
    const { Stage } = this
    if (!Stage) throw new Error('Stage is null.your should setStage first')
    const layer = Stage.getLayers().find((layer) => layer.name() === 'image')
    if (!layer) {
      Stage.add(new Konva.Layer({ name: 'image' }))
    } else {
      console.warn('layer is exist.No need to set again')
    }
  }
  async drawImage(image: HTMLImageElement) {
    const { Stage } = this
    if (!Stage) throw new Error('Stage is null.your should setStage first')
    const layer = Stage.getLayers().find((layer) => layer.name() === 'image')
    if (!layer) throw new Error('layer is null.your should setLayer first')
    layer.removeChildren()
    const stageWidth = Stage.width()
    const stageHeight = Stage.height()
    const { width, height } = await ImageUtils.scaleImage2Rect(image, stageWidth, stageHeight)
    const y = Math.floor((stageHeight - height) / 2)
    const x = Math.floor((stageWidth - width) / 2)
    const imageKonva = new Konva.Image({ image, width, height, y, x })
    imageKonva.cache()
    layer.add(imageKonva)
    return imageKonva
  }
}
