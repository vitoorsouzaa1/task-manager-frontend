import axios from 'axios'
import { useEffect, useState, useMemo, useCallback } from 'react'
import { useAlert } from 'react-alert'

import './Tasks.scss'

import { TaskItem } from './TaskItem'
import { AddTask } from './AddTask'

export const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const alert = useAlert()

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        'https://fsc-task-manager-api.up.railway.app/tasks'
      )
      setTasks(data)
    } catch (_e) {
      alert.error('Something went wrong trying to get tasks')
    }
  }, [alert])

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false)
  }, [tasks])

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === true)
  }, [tasks])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>

      <div className="last-tasks">
        <h3>Latest Tasks</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
            <TaskItem
              key={lastTask._id}
              task={lastTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Completed Tasks</h3>
        <div className="tasks-list">
          {completedTasks.map((completedTask) => (
            <TaskItem
              key={completedTask._id}
              task={completedTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
