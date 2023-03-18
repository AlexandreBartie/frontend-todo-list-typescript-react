import React, { ReactElement } from "react"

import { Grid } from "@mui/material"
import { TaskArea } from "./TaskAreaController"
import { UXTaskCounter } from "../TaskCounter/TaskCounter"

export type UXTaskArea_PropTypes = { form: TaskArea }

export function UXTaskArea_Counter(props: UXTaskArea_PropTypes): ReactElement {
  const { form } = props

  console.log(form.countTodo)

  return (
    <>
      <Grid
        item
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        md={10}
        xs={12}
        mb={8}
      >
        <UXTaskCounter />
        <UXTaskCounter />
        <UXTaskCounter />
      </Grid>
    </>
  )
}
