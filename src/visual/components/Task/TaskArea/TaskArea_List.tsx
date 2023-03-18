import React, { ReactElement } from "react"

import { Box, Grid } from "@mui/material"
import { TaskArea } from "./TaskAreaController"

export type UXTaskArea_PropTypes = { form: TaskArea }

export function UXTaskArea_List(props: UXTaskArea_PropTypes): ReactElement {
  const { form } = props

  console.log(form.manager.enum.statusList.name)

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
