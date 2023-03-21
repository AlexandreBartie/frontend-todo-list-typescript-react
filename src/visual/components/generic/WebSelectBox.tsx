import React, { ReactElement } from "react"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export function WebSelectBox(props: IWebSelectBox): ReactElement {
  const { name, label, value, items, disabled } = props
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-label-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label-id`}
        id={`${name}-select-id`}
        value={value}
        label={label}
        name={name}
        disabled={disabled}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export interface IWebSelectBox{
  name: string
  label: string
  value?: string
  disabled?: boolean
  items: IWebSelectBoxItem[]
}

export interface IWebSelectBoxItem {
  id: number
  name: string
}
