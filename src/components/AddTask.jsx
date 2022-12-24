import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'
import { useAlert } from 'react-alert'

import { CustomInput } from './CustomInput'

import './AddTask.scss'
import { CustomButton } from './CustomButton'

export const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState('')

  const alert = useAlert()

  const handleOnChange = (e) => {
    setTask(e.target.value)
  }

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error('The task needs a description to be added')
      }

      await axios.post('https://fsc-task-manager-backend.herokuapp.com/tasks', {
        description: task,
        isCompleted: false,
      })

      await fetchTasks()

      setTask('')

      await alert.success('The task was add with success')
    } catch (err) {
      alert.error('Something went wrong')
    }
  }

  return (
    <div className="add-task-container">
      <CustomInput
        label="Add Task"
        value={task}
        onChange={handleOnChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#fff" />
      </CustomButton>
    </div>
  )
}
