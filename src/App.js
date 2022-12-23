import { useState } from 'react'
import { TaskItem } from '../src/components/TaskItem.component'

const App = () => {
  let [tasks, setTasks] = useState([
    {
      id: '1',
      description: 'Estudar ReactPro',
      inCompleted: false,
    },
    {
      id: '2',
      description: 'Ler Sobre Javascript',
      inCompleted: true,
    },
  ])

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  )
}

export default App
