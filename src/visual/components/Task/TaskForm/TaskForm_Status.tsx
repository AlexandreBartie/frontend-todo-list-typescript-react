import React, { ReactElement } from "react"

import { WebSelectBox } from "../../generic/WebSelectBox"

import { IUXTaskForm } from "./TaskForm"

export function UXTaskForm_Status(props: IUXTaskForm): ReactElement {
  const { form } = props

  const status = form.app.domain.statusList

  return (
    <WebSelectBox
      {...{
        name: status.name,
        label: status.label,
        disabled: form.disabled,
        items: status.items,
      }}
    />
  )
}
