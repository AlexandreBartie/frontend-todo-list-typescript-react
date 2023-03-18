import React, { ReactElement } from "react"

import { UXSelectBox, IUXSelectBox } from "../../generic/selectBox"

import { UXTaskForm_PropTypes } from "./TaskForm"

export function UXTaskForm_Status(props: UXTaskForm_PropTypes): ReactElement {
  const { form } = props

  const status = form.manager.enum.statusList

  const settingsSelect = (): IUXSelectBox => {
    return {
      name: status.name,
      label: status.label,
      disabled: form.disabled,
      items: status.items,
    }
  }

  return <UXSelectBox settings={settingsSelect()} />
}
