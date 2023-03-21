import React, { ReactElement, useState } from "react"

import { FormControlLabel, Switch } from "@mui/material"
import { formatOnOff } from "../../../library/boolean/formatBoolean"

export function WebSwitch(props: IWebSwitch): ReactElement {
  const { label, value, color } = props

  // const [value, setValue] = useState(props.value)

  // const [status, setStatus] = useState(getOnOff(props.value))

  // useEffect(() => {
  //   setStatus(getOnOff())
  // }, [value]);

  function onChange(event: React.ChangeEvent<HTMLElement>, checked: boolean) {
    console.log(checked)
  }

  return (
    <FormControlLabel
      label={`${label}: ${formatOnOff(value)}`}
      control={<Switch onChange={onChange} value={value} color={color} />}
    />
  )
}

export interface IWebSwitch {
  label: string
  value: boolean
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default"
}
