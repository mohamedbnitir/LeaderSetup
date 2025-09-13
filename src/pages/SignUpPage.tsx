import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EnvelopeIcon, LockClosedIcon, UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    agreeToTerms: false
  })
  const [error, setError] = useState('')
  const { signup, loading } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms of service')
      return
    }

    const success = await signup(formData.name, formData.email, formData.password, formData.company)
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Failed to create account. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex justify-center">
            <h1 className="text-3xl font-bold text-blue-600">LeaderSetup</h1>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              sign in to your existing account
            </Link>
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <Input
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              icon={<UserIcon />}
              placeholder="Enter your full name"
            />
            
            <Input
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              icon={<EnvelopeIcon />}
              placeholder="Enter your email"
            />
            
            <Input
              label="Company Name"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              required
              icon={<BuildingOfficeIcon />}
              placeholder="Enter your company name"
            />
            
            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              icon={<LockClosedIcon />}
              placeholder="Create a password"
            />

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full"
              loading={loading}
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 12.5c0-1.2-.1-2.4-.3-3.6H12v6.8h6.4c-.3 1.6-1.2 3-2.5 4v3.3h4c2.4-2.2 3.8-5.4 3.8-9.2 0-.6-.1-1.2-.2-1.8z"/>
                  <path d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.5 1.1-4 1.1-3.1 0-5.7-2.1-6.6-4.9H1.5v3.1C3.6 21.4 7.5 24 12 24z"/>
                  <path d="M5.4 14.3c-.2-.7-.4-1.4-.4-2.3s.1-1.6.4-2.3V6.6H1.5C.5 8.6 0 10.2 0 12s.5 3.4 1.5 5.4l3.9-3.1z"/>
                  <path d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.5 0 3.6 2.6 1.5 6.6l3.9 3.1C6.3 6.9 8.9 4.8 12 4.8z"/>
                </svg>
                Microsoft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage