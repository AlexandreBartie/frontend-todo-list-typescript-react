import React, { ReactElement } from "react"

import { Grid, SxProps, Theme } from "@mui/material"

import { Profile } from "../../elements/profile/profile"

export const SideBar = (): ReactElement => {
  return (
    <Grid item md={4} sx={sideBarTheme()}>
      <Profile />
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
