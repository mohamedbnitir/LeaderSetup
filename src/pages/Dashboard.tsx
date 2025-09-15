import React from 'react'
import { 
  ChartBarIcon, 
  ClipboardDocumentListIcon, 
  UsersIcon, 
  CheckCircleIcon,
  TrendingUpIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

const Dashboard: React.FC = () => {
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
      icon: CheckCircleIcon
    },
    {
      title: 'Team Members',
      value: '24',
      change: '+2',
      trend: 'up',
      icon: UsersIcon
    },
    {
      title: 'Completion Rate',
      value: '76.5%',
      change: '+3.2%',
      trend: 'up',
      icon: TrendingUpIcon
    }
  ]

  const recentActivities = [
    {
      id: 1,
      user: 'Sarah Johnson',
      action: 'completed task',
      task: 'Update user documentation',
      time: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 2,
      user: 'Mike Chen',
      action: 'created task',
      task: 'Review API endpoints',
      time: '4 hours ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 3,
      user: 'Emily Rodriguez',
      action: 'assigned task',
      task: 'Design system updates',
      time: '6 hours ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 4,
      user: 'David Kim',
      action: 'commented on',
      task: 'Mobile app testing',
      time: '8 hours ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your team.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            View Reports
          </button>
          <button className="btn-primary flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Task
          </button>
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
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <kpi.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <img
                      src={activity.avatar}
                      alt={activity.user}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}{' '}
                        <span className="font-medium">{activity.task}</span>
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all activity →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Task Completion Chart */}
        <div className="lg:col-span-1">
          <div className="card">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Task Completion</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="text-sm font-medium text-gray-900">32/42 tasks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Last Week</span>
                  <span className="text-sm font-medium text-gray-900">28/35 tasks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Month</span>
                  <span className="text-sm font-medium text-gray-900">189/247 tasks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '76.5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card mt-6">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <PlusIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Create New Task</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Invite Team Member</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Generate Report</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard