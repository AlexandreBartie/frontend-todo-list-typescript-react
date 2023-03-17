import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { UXTaskArea } from "../../panels/taskArea/taskArea"
import { UXSideBar } from "../../panels/sidebar/sidebar"

import { TasksManager } from "../../../business/core/manager"

export function UXDashBoard(): ReactElement {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <UXTaskArea />
      <UXSideBar manager={new TasksManager()} />
    </Grid>
  )
}
