import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Check your email
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </div>
          
          <div className="bg-white py-8 px-6 shadow-lg rounded-lg text-center">
            <p className="text-gray-600 mb-6">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            
            <div className="space-y-4">
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full"
              >
                Try again
              </Button>
              
              <Link to="/login">
                <Button className="w-full">
                  Back to login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex justify-center">
            <h1 className="text-3xl font-bold text-blue-600">LeaderSetup</h1>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              icon={<EnvelopeIcon />}
              placeholder="Enter your email"
            />

            <Button
              type="submit"
              className="w-full"
              loading={loading}
            >
              Send reset link
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-blue-600 hover:text-blue-500">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage