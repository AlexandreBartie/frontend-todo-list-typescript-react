import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { UXTaskPage_Central } from "./TaskPage_Central"
import { UXTaskPage_SideBar } from "./TaskPage_SideBar"

import { AppClient } from "../../../business/core/app"

export function UXTaskPage(): ReactElement {
  const app = new AppClient()

  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <UXTaskPage_Central app={app} />
      <UXTaskPage_SideBar app={app} />
    </Grid>
  )
}
