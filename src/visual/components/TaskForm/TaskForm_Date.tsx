import React, { ReactElement, useState } from "react"

import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { UXTaskForm_PropTypes } from "./TaskForm"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"

export function UXTaskForm_Date(props: UXTaskForm_PropTypes): ReactElement {
  const { form } = props
  const [date, setDate] = useState<Date | null>()

  function onDataChange(newDate: Date | null) {
    if (newDate) setDate(form.task.date)
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MMM/yyyy"
          value={date}
          onChange={onDataChange}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          // renderInput={(params: any) => (<TextField {...params}/>)}
        ></DesktopDatePicker>
      </LocalizationProvider>
    </>
  )
}
