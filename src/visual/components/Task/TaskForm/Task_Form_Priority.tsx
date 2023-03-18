import React, { ReactElement } from "react"

import { UXSelectBox, IUXSelectBox } from "../../generic/selectBox"

import { UXTaskForm_PropTypes } from "./TaskForm"

export function UXTaskForm_Priority(props: UXTaskForm_PropTypes): ReactElement {
  const { form } = props

  const priority = form.manager.enum.priorityList

  const settingsSelect = (): IUXSelectBox => {
    return {
      name: priority.name,
      label: priority.label,
      items: priority.items,
      disabled: form.disabled,
    }
  }

  return <UXSelectBox settings={settingsSelect()} />
}
