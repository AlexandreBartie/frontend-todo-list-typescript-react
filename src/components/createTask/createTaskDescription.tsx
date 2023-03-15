import React, { ReactElement } from "react"

import { TextField } from "@mui/material"

export function UXCreateTaskDescription(): ReactElement {
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
    ></TextField>
  )
}