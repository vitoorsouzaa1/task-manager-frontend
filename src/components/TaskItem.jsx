import axios from 'axios'
import { useAlert } from 'react-alert'

import './TaskItem.scss'
import { AiFillDelete } from 'react-icons/ai'

export const TaskItem = async ({ task, fetchTasks }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(
        `https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`
      )

      await fetchTasks()

      alert.success('The task was successfully deleted!')
    } catch (_e) {
      alert.error('Something went wrong')
    }
  }

  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(
        `https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id} `,
        { isCompleted: e.target.checked }
      )

      await fetchTasks()

      alert.success('The task was modified with success')
    } catch (_e) {
      alert.error('Something went wrong')
    }
  }

  return (
    <>
      <div className="task-item-container">
        <div className="task-description">
          <label
            className={
              task.isCompleted
                ? 'checkbox-container-completed'
                : 'checkbox-container'
            }
          >
            {task.description}
            <input
              type="checkbox"
              defaultChecked={task.isCompleted}
              onChange={handleTaskCompletionChange}
            />
            <span
              className={task.isCompleted ? 'checkmarc completed' : 'checkmark'}
            ></span>
          </label>
        </div>

        <div className="delete" onClick={(e) => handleTaskDeletion(e)}>
          <AiFillDelete
            size={18}
            color="#F97474"
            onClick={handleTaskDeletion}
          />
        </div>
      </div>
    </>
  )
}
