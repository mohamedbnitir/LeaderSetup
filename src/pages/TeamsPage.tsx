import React, { useState } from 'react'
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import Input from '@/components/ui/Input'
import { getInitials } from '@/lib/utils'

interface TeamMember {
  id: number
  name: string
  email: string
  phone: string
  role: string
  avatar?: string
  status: 'active' | 'inactive'
  joinDate: string
}

const TeamsPage: React.FC = () => {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const mockTeamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 123-4567',
      role: 'Engineering Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      status: 'active',
      joinDate: '2023-01-15'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      phone: '+1 (555) 234-5678',
      role: 'Senior Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      status: 'active',
      joinDate: '2023-02-20'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@company.com',
      phone: '+1 (555) 345-6789',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      status: 'active',
      joinDate: '2023-03-10'
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.kim@company.com',
      phone: '+1 (555) 456-7890',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      status: 'active',
      joinDate: '2023-04-05'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1 (555) 567-8901',
      role: 'QA Engineer',
      status: 'active',
      joinDate: '2023-05-12'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      email: 'alex.thompson@company.com',
      phone: '+1 (555) 678-9012',
      role: 'DevOps Engineer',
      status: 'inactive',
      joinDate: '2023-06-18'
    }
  ]

  const filteredMembers = mockTeamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
          <p className="text-gray-600">Manage your team and invite new members</p>
        </div>
        <Button onClick={() => setIsInviteModalOpen(true)}>
          <PlusIcon className="h-5 w-5 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Search */}
      <div className="card p-6">
        <div className="relative max-w-md">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Invite New Member Card */}
        <div 
          className="card p-6 border-2 border-dashed border-gray-300 hover:border-blue-400 cursor-pointer transition-colors"
          onClick={() => setIsInviteModalOpen(true)}
        >
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <PlusIcon className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Invite New Member</h3>
            <p className="text-sm text-gray-500">Add a new team member to your workspace</p>
          </div>
        </div>

        {/* Team Member Cards */}
        {filteredMembers.map((member) => (
          <div key={member.id} className="card p-6 hover:shadow-md transition-shadow">
            <div className="text-center">
              {/* Avatar */}
              <div className="mx-auto h-16 w-16 mb-4">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xl font-medium text-white">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>

              {/* Member Info */}
              <h3 className="text-lg font-medium text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>

              {/* Status Badge */}
              <div className="mb-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  member.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {member.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  <span>{member.phone}</span>
                </div>
              </div>

              {/* Join Date */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Joined {new Date(member.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Invite Member Modal */}
      <Modal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        title="Invite Team Member"
      >
        <form className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            required
            icon={<EnvelopeIcon />}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select className="input">
              <option>Select role</option>
              <option>Engineering Manager</option>
              <option>Senior Developer</option>
              <option>Developer</option>
              <option>UX Designer</option>
              <option>Product Manager</option>
              <option>QA Engineer</option>
              <option>DevOps Engineer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Personal Message (Optional)
            </label>
            <textarea
              className="input"
              rows={3}
              placeholder="Add a personal message to the invitation..."
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsInviteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Send Invitation
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default TeamsPage