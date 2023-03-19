import React, { ReactElement } from "react"

import { Box, Grid } from "@mui/material"

import { AppClient } from "../../../business/core/app"
import { UXTaskSummary } from "../../components/Task/TaskSummary/TaskSummary"
import { UXTaskList } from "../../components/Task/TaskList/TaskList"

export type IUXTaskPage_Central = { app: AppClient }

export function UXTaskPage_Central(props: IUXTaskPage_Central): ReactElement {
  const { app } = props
  return (
    <>
      <Grid item md={8} px={4}>
        <Box mb={8} px={4}>
          <h2>{"Current Status of your Tasks"}</h2>
        </Box>
        <Grid container display="flex" justifyContent="center">
          <UXTaskSummary list={app.domain.statusList.items} />
          <UXTaskList app={app} />
        </Grid>
      </Grid>
    </>
  )
}
