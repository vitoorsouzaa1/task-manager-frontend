import axios from 'axios'
import { useState, useEffect } from 'react'

import { TaskItem } from './components/TaskItem.component'

const App = () => {
  let [tasks, setTasks] = useState([
    {
      id: '1',
      description: 'Study',
      inCompleted: false,
    },
    {
      id: '2',
      description: 'Read a Javascript Book',
      inCompleted: true,
    },
  ])

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
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  )
}

export default App
