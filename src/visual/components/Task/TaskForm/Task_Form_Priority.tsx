import React, { ReactElement } from "react"

import { IWebSelectBox, WebSelectBox } from "../../generic/WebSelectBox"

import { IUXTaskForm } from "./TaskForm"

export function UXTaskForm_Priority(props: IUXTaskForm): ReactElement {
  const { form } = props

  const priority = form.app.domain.priorityList

  const settingsSelect = (): IWebSelectBox => {
    return {
      name: priority.name,
      label: priority.label,
      items: priority.items,
      disabled: form.disabled,
    }
  }

  return <WebSelectBox settings={settingsSelect()} />
}
