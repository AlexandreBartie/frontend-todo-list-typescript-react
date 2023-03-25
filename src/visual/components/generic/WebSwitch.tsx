import React, { ReactElement, useState } from "react"

import { FormControlLabel, Switch } from "@mui/material"

export function WebSwitch(props: IWebSwitch): ReactElement {
  const { label, color, disabled } = props

  const [checked, setChecked] = useState(props.checked)

  function changeValue(event: React.ChangeEvent<HTMLElement>, checked: boolean) {
    setChecked(checked)

    if (props.onChange)
      props.onChange(checked)
  }

  return (
    <FormControlLabel
      label={label}
      control={<Switch onChange={changeValue} checked={checked} color={color} disabled={disabled} />}
    />
  )
}

export interface IWebSwitch {
  label: string
  checked: boolean
  disabled?: boolean
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'
  onChange?:(checked: boolean) => void
}
