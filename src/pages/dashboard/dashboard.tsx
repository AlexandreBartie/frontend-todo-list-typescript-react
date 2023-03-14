import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { UXTaskArea } from "../../components/taskArea/taskArea"
import { UXSideBar } from "../../components/sidebar/sidebar"

export const UXDashBoard = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <UXTaskArea/>
      <UXSideBar/>
    </Grid>
  )
}
