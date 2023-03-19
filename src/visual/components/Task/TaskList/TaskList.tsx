import React, { ReactElement } from "react"

import { Box, Grid } from "@mui/material"

import { AppClient } from "../../../../business/core/app"

export type IUXTaskList = { app: AppClient }

export function UXTaskList(props: IUXTaskList): ReactElement {
  const { app } = props

  console.log(app.domain.statusList.name)

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
