import React, { ReactElement } from "react"

import { TextField } from "@mui/material"

export function UXCreateTaskTitle(): ReactElement {
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
    ></TextField>
  )
}
