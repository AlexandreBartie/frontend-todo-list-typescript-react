import React, { ReactElement, useState } from "react"

import { Box, Grid } from "@mui/material"

import { AppClient } from "../../../business/core/app"
import { UXTaskSummary } from "../../components/Task/TaskSummary/TaskSummary"
import { IUXTaskList, UXTaskList} from "../../components/Task/TaskView/TaskList"
import { formatNow } from "../../../library/date/formatDate"

export type IUXTaskPage_Central = { app: AppClient }

export function UXTaskPage_Central(props: IUXTaskPage_Central): ReactElement {
  const { app } = props

  const [keyCounter, setKeyCounter] = useState(formatNow())

  function taskUpdated() {
    setKeyCounter(formatNow())
  }

  const taskList: IUXTaskList = {
    tasks: props.app.tasks,
    action: { onTaskChange: taskUpdated},
  }

  return (
    <>
      <Grid item md={8} px={4}>
        <Box mb={8} px={4}>
          <h2>{"Current Status of your Tasks"}</h2>
        </Box>
        <Grid container display="flex" justifyContent="center">
          <UXTaskSummary key={keyCounter} list={app.domain.statusList} />
          <UXTaskList { ...taskList } />
        </Grid>
      </Grid>
    </>
  )
}
