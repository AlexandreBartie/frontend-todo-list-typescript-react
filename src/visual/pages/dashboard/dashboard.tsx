import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { UXTaskArea } from "../../panels/taskArea/taskArea"
import { UXSideBar } from "../../panels/sidebar/sidebar"

export function UXDashBoard(): ReactElement {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <UXTaskArea />
      <UXSideBar />
    </Grid>
  )
}
