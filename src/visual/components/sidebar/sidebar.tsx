import React, { ReactElement } from "react"

import { Grid, SxProps, Theme } from "@mui/material"

import { UXProfile } from "../profile/profile"
import { UXTaskForm } from "../Task/TaskForm/TaskForm"

import { TaskForm } from "../Task/TaskForm/TaskFormController"

import { TaskManager } from "../../../business/core/manager"

export type UXSideBar_PropTypes = { manager: TaskManager }

export function UXSideBar(props: UXSideBar_PropTypes): ReactElement {
  const { manager } = props

  return (
    <Grid item md={4} sx={sideBarTheme()}>
      <UXProfile profile={manager.getProfile()} />
      <UXTaskForm form={new TaskForm(manager)} />
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
