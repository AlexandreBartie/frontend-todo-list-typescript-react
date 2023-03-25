import React, { ReactElement } from "react"

import { Grid } from "@mui/material"
import { UXTaskCounter } from "./TaskCounter"

import { StatusList } from "../../../../business/base/status"

export type IUXTaskSummary = { list: StatusList }

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
        {list.all.map((item) => (
          <UXTaskCounter
            key={item.id}
            {...{ title: item.name, count: item.counter, color: item.color }}
          />
        ))}
      </Grid>
    </>
  )
}

