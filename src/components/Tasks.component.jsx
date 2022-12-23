import axios from 'axios'
import { useEffect, useState } from 'react'
import './tasks.scss'

export const Tasks = () => {
  let [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        'https://fsc-task-manager-backend.herokuapp.com/tasks'
      )
      setTasks(data)
    } catch (e) {
      console.log(e)
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
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Completed Tasks</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <p>{completedTask.description}</p>
            ))}
        </div>
      </div>
    </div>
  )
}
