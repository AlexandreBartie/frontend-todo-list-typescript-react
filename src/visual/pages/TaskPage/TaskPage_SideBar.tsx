import React, { ReactElement } from "react"

import { Grid, SxProps, Theme } from "@mui/material"

import { UXProfileView } from "../../components/profile/ProfileView"
import { UXTaskForm } from "../../components/Task/TaskForm/TaskForm"

import { AppClient } from "../../../business/core/app"

export type IUXTaskPage_SideBar = { app: AppClient }

export function UXTaskPage_SideBar(props: IUXTaskPage_SideBar): ReactElement {
  const { app } = props

  return (
    <Grid item md={4} sx={taskSideBarTheme()}>
      <UXProfileView profile={app.profile} />
      <UXTaskForm form={app.view.taskForm} />
    </Grid>
  )
}

const taskSideBarTheme = (): SxProps<Theme> => {
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
