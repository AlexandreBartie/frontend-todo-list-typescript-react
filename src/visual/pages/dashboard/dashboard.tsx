import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { UXTaskArea } from "../../components/Task/TaskArea/taskArea"
import { UXSideBar } from "../../components/sidebar/sidebar"

import { TaskManager } from "../../../business/core/manager"

export function UXDashBoard(): ReactElement {
  const manager = new TaskManager()

  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <UXTaskArea manager={manager} />
      <UXSideBar manager={manager} />
    </Grid>
  )
}
