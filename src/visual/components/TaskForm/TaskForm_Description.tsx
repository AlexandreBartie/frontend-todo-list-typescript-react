import React, { ReactElement } from "react"

import { TextField } from "@mui/material"
import { UXTaskForm_PropTypes } from "./TaskForm"

export function UXTaskForm_Description(props: UXTaskForm_PropTypes): ReactElement {
  const { form } = props
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
      disabled={form.disable}
    ></TextField>
  )
}