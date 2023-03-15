import React, { ReactElement } from "react"

import { Grid, SxProps, Theme } from "@mui/material"

import { UXProfile } from "../../components/profile/profile"
import { UXCreateTask } from "../../components/createTask/createTaskForm"

import { Profile } from "../../business/security/users/profile"

export function UXSideBar(): ReactElement {
  return (
    <Grid item md={4} sx={sideBarTheme()}>
      <UXProfile profile={new Profile("Carlos Alberto Bartie")} />
      <UXCreateTask/>
    </Grid>
  )
}

const sideBarTheme = (): SxProps<Theme> => {
  return {
    height: "100vh",
    position: "static",
    right: 0,
    top: 0,
    witdth: "100%",
    backgroundColor: "background.paper",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }
}
