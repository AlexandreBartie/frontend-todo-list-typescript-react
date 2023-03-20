import React, { ReactElement } from "react"

import { Box, Grid } from "@mui/material"

import { TaskList } from "../../../../business/core/task"

export type IUXTaskView = { tasks: TaskList }

export function UXTaskView(props: IUXTaskView): ReactElement {
  const { tasks } = props

  console.log(tasks.all.length)

  return (
    <>
      <Grid item display="flex" flexDirection="column" xs={10} md={8}>
        <Box>Task Item</Box>
        <Box>Task Item</Box>
        <Box>Task Item</Box>
      </Grid>
    </>
  )
}
