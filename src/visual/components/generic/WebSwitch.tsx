import React, { ReactElement } from "react"

import { FormControlLabel, Switch } from "@mui/material"
import { formatOnOff } from "../../../library/boolean/formatBoolean"

export function WebSwitch(props: IWebSwitch): ReactElement {
  const { label, checked, color } = props

  // const [value, setValue] = useState(props.value)

 // const [checked, setChecked] = useState(formatOnOff(value))

  // useEffect(() => {
  //   setStatus(getOnOff())
  // }, [value]);

  function onChange(event: React.ChangeEvent<HTMLElement>, checked: boolean) {
    console.log(formatOnOff(checked))
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
