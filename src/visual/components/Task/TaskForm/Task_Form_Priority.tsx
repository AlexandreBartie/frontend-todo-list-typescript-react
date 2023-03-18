import React, { ReactElement } from "react"

import { UXSelectBox, IUXSelectBox } from "../../generic/selectBox"

import { UXTaskForm_PropTypes } from "./TaskForm"

export function UXTaskForm_Priority(props: UXTaskForm_PropTypes): ReactElement {
  const { form } = props

  const settingsSelect = (): IUXSelectBox => {
    return {
      name: form.manager.priority.name,
      label: form.manager.priority.label,
      items: form.manager.priority.options,
      disabled: form.disabled,
    }
  }

  return <UXSelectBox settings={settingsSelect()} />
}
