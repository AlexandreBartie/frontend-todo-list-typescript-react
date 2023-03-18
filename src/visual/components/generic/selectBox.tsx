import React, { ReactElement } from "react"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export type UXSelectBox_PropTypes = { settings: IUXSelectBox }

export function UXSelectBox(props: UXSelectBox_PropTypes): ReactElement {
  const { name, label, value, items, disabled } = props.settings
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

export interface IUXSelectBox {
  name: string
  label: string
  items: IUXSelectBoxItem[]
  value?: string
  disabled?: boolean
}

export interface IUXSelectBoxItem {
  id: string
  name: string
}
