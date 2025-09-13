import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string, company: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth data on mount
    const storedUser = localStorage.getItem('leadsetup_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    
    // Mock authentication - in real app, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (email === 'demo@leadsetup.com' && password === 'demo123') {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: 'demo@leadsetup.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
        role: 'Team Lead'
      }
      setUser(mockUser)
      localStorage.setItem('leadsetup_user', JSON.stringify(mockUser))
      setLoading(false)
      return true
    }
    
    setLoading(false)
    return false
  }

  const signup = async (name: string, email: string, password: string, company: string): Promise<boolean> => {
    setLoading(true)
    
    // Mock signup - in real app, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: 'Team Lead'
    }
    
    setUser(mockUser)
    localStorage.setItem('leadsetup_user', JSON.stringify(mockUser))
    setLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('leadsetup_user')
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    loading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}