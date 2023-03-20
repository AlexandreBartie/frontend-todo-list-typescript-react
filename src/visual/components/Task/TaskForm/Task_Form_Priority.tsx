import React, { ReactElement } from "react"

import { WebSelectBox } from "../../generic/WebSelectBox"

import { IUXTaskForm } from "./TaskForm"

export function UXTaskForm_Priority(props: IUXTaskForm): ReactElement {
  const { form } = props

  const priority = form.app.domain.priorityList

  return (
    <WebSelectBox
      {...{
        name: priority.name,
        label: priority.label,
        items: priority.items,
        disabled: form.disabled,
      }}
    />
  )
}
