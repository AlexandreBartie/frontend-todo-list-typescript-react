import React, { ReactElement } from "react"

import { TextField } from "@mui/material"

import { IUXTaskForm } from "./TaskForm"

export function UXTaskForm_Title(props: IUXTaskForm): ReactElement {
  const { form } = props
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="write a short title to define this task."
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={form.disabled}
    ></TextField>
  )
}
