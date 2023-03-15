import React, { ReactElement } from "react"

import { TextField } from "@mui/material"

export function UXTaskForm_Title(): ReactElement {
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="write a short title to define this task."
      variant="outlined"
      size="small"
      name="title"
      fullWidth
    ></TextField>
  )
}
