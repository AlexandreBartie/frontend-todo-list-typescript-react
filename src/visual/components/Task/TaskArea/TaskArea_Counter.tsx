import React, { ReactElement } from "react"

import { Grid } from "@mui/material"
import { TaskArea } from "./TaskAreaController"
import { UXTaskCounter } from "../TaskCounter/TaskCounter"

export type UXTaskArea_PropTypes = { form: TaskArea }

export function UXTaskArea_Counter(props: UXTaskArea_PropTypes): ReactElement {
  const { form } = props

  const list = form.manager.enum.statusList.items

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
        {list.map((item) => (
          <UXTaskCounter key={item.id} 
            {...{ title: item.name, count: item.count, color: item.color }}
          />
        ))}

      </Grid>
    </>
  )
}
