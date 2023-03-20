import React, { ReactElement } from "react"

import { FormControlLabel, Switch } from "@mui/material"

export function WebSwitch(props: IWebSwitch): ReactElement {
  const { label, color = 'info' } = props
  return <FormControlLabel label={label} control={<Switch color={color} />} />
}

export interface IWebSwitch {
  label: string
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default"
}
