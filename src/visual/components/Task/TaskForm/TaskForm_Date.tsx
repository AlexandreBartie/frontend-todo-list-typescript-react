import React, { ReactElement, useState } from "react"

import { LocalizationProvider } from "@mui/x-date-pickers"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

import { IUXTaskForm } from "./TaskForm"

export function UXTaskForm_Date(props: IUXTaskForm): ReactElement {
  const { form } = props

  const task = form.task

  if (task === null) return(<></>)

  const [date, setDate] = useState<Date | null>(task.date)

  function onDataChange(newDate: Date | null) {
    if (newDate) {
      setDate(newDate)
      task.date = newDate
    }
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MMM/yyyy"
          value={date}
          disabled={form.disabled}
          onChange={onDataChange}
        ></DesktopDatePicker>
      </LocalizationProvider>
    </>
  )
}
