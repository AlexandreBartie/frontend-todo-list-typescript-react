import React, { ReactElement, useState } from "react"

import { FormControlLabel, Switch } from "@mui/material"

export function WebSwitch(props: IWebSwitch): ReactElement {
  const { label, color } = props

  // const [value, setValue] = useState(props.value)

 const [checked, setChecked] = useState(props.checked)

  // useEffect(() => {
  //   setStatus(getOnOff())
  // }, [value]);

  function onChange(event: React.ChangeEvent<HTMLElement>, checked: boolean) {
    setChecked(checked)
  }

  return (
    <FormControlLabel
      label={label}
      control={<Switch onChange={onChange} checked={checked} color={color} />}
    />
  )
}

export interface IWebSwitch {
  label: string
  checked: boolean
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'
}
