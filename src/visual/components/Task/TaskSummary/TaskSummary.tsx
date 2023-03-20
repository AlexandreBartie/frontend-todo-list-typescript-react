import React, { ReactElement } from "react"

import { Grid } from "@mui/material"
import { UXTaskCounter } from "./TaskCounter"

import { Status } from "../../../../business/base/status"

export type IUXTaskSummary = { list: Status[] }

export function UXTaskSummary(props: IUXTaskSummary): ReactElement {
  const { list } = props

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
          <UXTaskCounter
            key={item.id}
            {...{ title: item.name, count: item.count, color: item.color }}
          />
        ))}
      </Grid>
    </>
  )
}

