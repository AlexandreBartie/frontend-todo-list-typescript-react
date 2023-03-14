import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { TaskArea } from "../../components/taskArea/taskArea"
import { SideBar } from "../../components/sidebar/sidebar"

export const DashBoard = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea/>
      <SideBar/>
    </Grid>
  )
}
