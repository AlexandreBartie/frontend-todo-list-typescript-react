import React, { ReactElement, useState } from "react"

import { LocalizationProvider } from "@mui/x-date-pickers"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

import { UXTaskForm_PropTypes } from "./TaskForm"


export function UXTaskForm_Date(props: UXTaskForm_PropTypes): ReactElement {

  const { form } = props

  const [date, setDate] = useState<Date | null>(form.task.date)



  function onDataChange(newDate: Date | null) {
    if (newDate) {
      setDate(newDate)
      form.task.date = newDate
    }
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MMM/yyyy"
          value={date}
          onChange={onDataChange}
        ></DesktopDatePicker>
      </LocalizationProvider>
    </>
  )
}
