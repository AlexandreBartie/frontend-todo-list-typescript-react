import React, { ReactElement } from "react"

import { TextField } from "@mui/material"

export function UXTaskForm_Description(): ReactElement {
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="write details to better descrive the task."
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
    ></TextField>
  )
}