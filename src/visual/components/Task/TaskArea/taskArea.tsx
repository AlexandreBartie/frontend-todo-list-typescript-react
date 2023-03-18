import React, { ReactElement } from "react"

import { Box, Grid } from "@mui/material"

import { TaskManager } from "../../../../business/core/manager"
import { UXTaskArea_Counter } from "./TaskArea_Counter"
import { UXTaskArea_List } from "./TaskArea_List"

export type UXTaskArea_PropTypes = { manager: TaskManager }

export function UXTaskArea(props: UXTaskArea_PropTypes): ReactElement {
  const { manager } = props

  return (
    <>
      <Grid item md={8} px={4}>
        <Box mb={8} px={4}>
          <h2>{"Current Status of your Tasks"}</h2>
        </Box>
        <Grid container display="flex" justifyContent="center">
          <UXTaskArea_Counter form={manager.view.taskArea} />
          <UXTaskArea_List form={manager.view.taskArea} />
        </Grid>
      </Grid>
    </>
  )
}
