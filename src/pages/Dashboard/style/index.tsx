import { css } from '@emotion/react'

// 标题样式
export const TitleCss = css({
  textAlign: 'center',
  margin: 0,
  padding: '0.5em'
})

// 画布外部容器样式
export const FilterContainer = css({
  display: 'flex',
  justifyContent: 'center'
})

export const FilterContainerWrap = css({
  width: '70vmin',
  height: '70vmin',
  display: 'block',
  flex: 'none',
  overflow: 'auto'
})

// 画布样式
export const FilterContainerCanvas = css({
  width: '100%',
  height: '100%',
  display: 'block',
  backgroundColor: '#f2f2f2',
  flex: 'none'
})
