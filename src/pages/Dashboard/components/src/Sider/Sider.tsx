import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'

const SiderComponent = <T,>(props: ISiderProps<T>) => {
  const { data, value, disabled, onChange } = props
  const handleChange = (value: T) => onChange && onChange(value)
  return (
    <ToggleButtonGroup
      disabled={disabled}
      value={value}
      orientation="vertical"
      color="primary"
      exclusive
      sx={{ marginRight: 1, flex: 'none' }}
    >
      {data.map((item, index) => {
        const { value, title } = item
        return (
          <ToggleButton key={index} value={value} onClick={() => handleChange(value)}>
            <Typography>{title}</Typography>
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  )
}

export const Sider = React.memo(SiderComponent) as typeof SiderComponent

export interface ISiderProps<T> {
  data: ISiderPropsDataItem<T>[]
  value: T
  disabled: boolean
  onChange?: (value: T) => void
}

export interface ISiderPropsDataItem<T> {
  title: string
  value: T
}
