import React from 'react'
import Konva from 'konva'
import { useMount } from 'ahooks'
import { fileOpen } from 'browser-fs-access'
import { FilterContainer, FilterContainerCanvas, TitleCss, FilterContainerWrap } from './style'
import { ImageUtils } from './utils/image'
import { KonvaUtils } from './utils/konva'
// 组件 ↓
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Sider } from './components'
import { FilterConfig } from './config/FilterConfig'
import { Filters } from './utils/Filters'

export default function Dashboard() {
  const ContainerRef = React.createRef<HTMLDivElement>()
  const [image, setImage] = React.useState<Konva.Image>()
  const [siderValue, setSiderValue] = React.useState<number[]>([])
  useMount(() => {
    const { current: container } = ContainerRef
    if (!container) throw new Error('Container.current is null')
    const Stage = new Konva.Stage({
      container: container,
      width: container.scrollWidth,
      height: container.scrollHeight
    })
    KonvaUtils.getInstance().setStage(Stage).setLayer()
  })

  // 选取图片
  const handleSelectImage = async () => {
    // 选择图片
    const file = await fileOpen({
      extensions: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'],
      description: '图片文件'
    })
    // 转换文件为image
    const image = await ImageUtils.file2image(file)
    const imageKonva = await KonvaUtils.getInstance().drawImage(image)
    setImage(imageKonva)
    setFilter(siderValue, imageKonva)
  }

  // 滤镜回应事件
  const handleSiderChange = (id: number) => {
    const values = [...siderValue]
    const index = values.findIndex((value) => value === id)
    if (index === -1) {
      values.push(id)
    } else {
      values.splice(index, 1)
    }
    setSiderValue(values)
    if (image) {
      setFilter(values, image)
    }
  }

  // 设置滤镜
  const setFilter = async (filter: number[], image: Konva.Image) => {
    const filters = FilterConfig.filter((item) => filter.includes(item.value))
    await Filters.init()
    image?.cache()
    image?.filters(filters.map((item) => item.handle))
  }

  return (
    <>
      <h1 css={TitleCss}>Konva结合rust新增图片滤镜效果</h1>
      <Stack sx={{ justifyContent: 'center', paddingBottom: 2 }} direction="row" spacing={2}>
        <Button variant="contained" onClick={() => handleSelectImage()}>
          选择文件
        </Button>
      </Stack>
      <div css={FilterContainer}>
        <Sider<number>
          value={siderValue}
          data={FilterConfig}
          disabled={!image}
          onChange={handleSiderChange}
        />
        <div css={FilterContainerWrap}>
          <div ref={ContainerRef} css={FilterContainerCanvas}></div>
        </div>
      </div>
    </>
  )
}
