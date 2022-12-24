import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'

import './Tasks.scss'

import { TaskItem } from './TaskItem'
import { AddTask } from './AddTask'

export const Tasks = () => {
  let [tasks, setTasks] = useState([])
  const alert = useAlert()

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        'https://fsc-task-manager-backend.herokuapp.com/tasks'
      )
      setTasks(data)
    } catch (_e) {
      alert.error('Something went wrong trying to get tasks')
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>

      <div className="last-tasks">
        <h3>Latest Tasks</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem task={lastTask} fetchTasks={fetchTasks} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Completed Tasks</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <TaskItem task={completedTask} fetchTasks={fetchTasks} />
            ))}
        </div>
      </div>
    </div>
  )
}
