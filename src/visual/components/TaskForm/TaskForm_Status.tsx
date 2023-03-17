import React, { ReactElement } from "react"

import {  UXSelectBox, IUXSelectBox } from "../../atomix/selectBox"

import { UXTaskForm_PropTypes } from "./TaskForm"

export function UXTaskForm_Status(props: UXTaskForm_PropTypes): ReactElement {
  const { form } = props

  const settingsSelect = (): IUXSelectBox => {
    return {
      name: form.manager.status.name,
      label: form.manager.status.label,
      disabled: form.disabled,
      items: form.manager.status.options
    }
  }

  return (
    <UXSelectBox settings={settingsSelect()}/>
  )
}

