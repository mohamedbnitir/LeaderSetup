import React, { useState } from 'react'
import { 
  CalendarIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'

const ReportsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState('last-30-days')

  const kpiData = [
    {
      title: 'Total Tasks',
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: ClipboardDocumentListIcon
    },
    {
      title: 'Completed Tasks',
      value: '189',
      change: '+8%',
      trend: 'up',
      icon: ChartBarIcon
    },
    {
      title: 'Active Members',
      value: '24',
      change: '+2',
      trend: 'up',
      icon: UsersIcon
    },
    {
      title: 'Avg. Completion Time',
      value: '2.3 days',
      change: '-0.5 days',
      trend: 'up',
      icon: ClockIcon
    }
  ]

  const teamProductivity = [
    { name: 'Sarah Johnson', completed: 32, assigned: 38, rate: 84 },
    { name: 'Mike Chen', completed: 28, assigned: 35, rate: 80 },
    { name: 'Emily Rodriguez', completed: 25, assigned: 30, rate: 83 },
    { name: 'David Kim', completed: 22, assigned: 28, rate: 79 },
    { name: 'Lisa Wang', completed: 18, assigned: 22, rate: 82 }
  ]

  const taskStatusData = [
    { status: 'Completed', count: 189, percentage: 76.5, color: 'bg-green-500' },
    { status: 'In Progress', count: 35, percentage: 14.2, color: 'bg-blue-500' },
    { status: 'To Do', count: 23, percentage: 9.3, color: 'bg-gray-400' }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Track your team's performance and productivity</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-gray-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="input"
            >
              <option value="last-7-days">Last 7 days</option>
              <option value="last-30-days">Last 30 days</option>
              <option value="last-90-days">Last 90 days</option>
              <option value="last-year">Last year</option>
            </select>
          </div>
          <Button variant="outline">
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last period</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <kpi.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Completion Trends */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Task Completion Trends</h3>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-end justify-between space-x-2">
              {/* Mock Chart Bars */}
              {[65, 78, 82, 75, 88, 92, 85, 79, 86, 91, 88, 94].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">
                    {new Date(2024, 0, (index + 1) * 2.5).getDate()}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                  <span>Completion Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Status Distribution */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Task Status Distribution</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {taskStatusData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded ${item.color} mr-3`}></div>
                    <span className="text-sm font-medium text-gray-900">{item.status}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">{item.count} tasks</span>
                    <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="flex h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500" style={{ width: '76.5%' }}></div>
                  <div className="bg-blue-500" style={{ width: '14.2%' }}></div>
                  <div className="bg-gray-400" style={{ width: '9.3%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Productivity Table */}
      <div className="card">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Team Productivity</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completed Tasks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned Tasks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamProductivity.map((member, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.completed}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.assigned}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.rate}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${member.rate}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReportsPage