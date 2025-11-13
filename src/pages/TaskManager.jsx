import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { useTheme } from '../Context/ThemeContext.jsx'
import Card from '../Components/card.jsx'
import Button from '../Components/button.jsx'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')
  const { isDark, toggleTheme } = useTheme()

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen p-4">
      <Card className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <Button onClick={toggleTheme}>
            {isDark ? 'Light' : 'Dark'} Mode
          </Button>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <Button onClick={addTask}>Add Task</Button>
        </div>

        <div className="flex gap-2 mb-4">
          {['all', 'active', 'completed'].map(f => (
            <Button
              key={f}
              variant={filter === f ? 'primary' : 'secondary'}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          {filteredTasks.map(task => (
            <div key={task.id} className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mr-2"
                />
                <span className={task.completed ? 'line-through text-gray-500' : ''}>
                  {task.text}
                </span>
              </div>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}