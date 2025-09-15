import React, { useState } from 'react'
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import Input from '@/components/ui/Input'

interface Task {
  id: number
  title: string
  description: string
  assignee: {
    name: string
    avatar: string
  }
  status: 'todo' | 'in-progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  dueDate: string
}

const TasksPage: React.FC = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const mockTasks: Task[] = [
    {
      id: 1,
      title: 'Update user documentation',
      description: 'Review and update the user guide with new features',
      assignee: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face'
      },
      status: 'completed',
      priority: 'high',
      dueDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Review API endpoints',
      description: 'Audit all API endpoints for security and performance',
      assignee: {
        name: 'Mike Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
      },
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'Design system updates',
      description: 'Update design tokens and component library',
      assignee: {
        name: 'Emily Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
      },
      status: 'todo',
      priority: 'low',
      dueDate: '2024-01-25'
    }
  ]

  const getStatusBadge = (status: Task['status']) => {
    const styles = {
      'todo': 'bg-gray-100 text-gray-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'completed': 'bg-green-100 text-green-800'
    }
    
    const labels = {
      'todo': 'To Do',
      'in-progress': 'In Progress',
      'completed': 'Completed'
    }

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    )
  }

  const getPriorityBadge = (priority: Task['priority']) => {
    const styles = {
      'low': 'bg-gray-100 text-gray-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'high': 'bg-red-100 text-red-800'
    }

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600">Manage and track your team's tasks</p>
        </div>
        <Button onClick={() => setIsAddTaskModalOpen(true)}>
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input"
            >
              <option value="all">All Status</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <Button variant="outline">
              <FunnelIcon className="h-5 w-5 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{task.title}</div>
                      <div className="text-sm text-gray-500">{task.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={task.assignee.avatar}
                        alt={task.assignee.name}
                        className="h-8 w-8 rounded-full mr-3"
                      />
                      <span className="text-sm text-gray-900">{task.assignee.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(task.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getPriorityBadge(task.priority)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Task Modal */}
      <Modal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        title="Add New Task"
      >
        <form className="space-y-4">
          <Input
            label="Task Title"
            placeholder="Enter task title"
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="input"
              rows={3}
              placeholder="Enter task description"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assignee
              </label>
              <select className="input">
                <option>Select assignee</option>
                <option>Sarah Johnson</option>
                <option>Mike Chen</option>
                <option>Emily Rodriguez</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select className="input">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <Input
            label="Due Date"
            type="date"
            required
          />
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsAddTaskModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Create Task
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default TasksPage