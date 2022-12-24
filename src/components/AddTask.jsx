import { useState } from 'react'

import { CustomInput } from './CustomInput'

import './AddTask.scss'

export const AddTask = () => {
  const [task, setTask] = useState('')

  const handleOnChange = (e) => {
    setTask(e.tagert.value)
  }

  return (
    <div className="add-task-container">
      <CustomInput label="Add Task" value={task} onChange={handleOnChange} />
    </div>
  )
}
