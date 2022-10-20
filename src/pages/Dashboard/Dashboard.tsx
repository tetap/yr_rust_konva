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
  const [siderValue, setSiderValue] = React.useState<number>(-1)
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

  const handleSiderChange = (id: number) => {
    if (id === siderValue) return
    setSiderValue(id)
    if (image) {
      setFilter(id, image)
    }
  }

  const setFilter = async (value: number, image: Konva.Image) => {
    await Filters.init()
    const filter = FilterConfig.find((c) => c.value === value)
    if (filter) {
      image?.cache()
      image?.filters([filter.handle])
    }
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
