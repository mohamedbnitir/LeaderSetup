import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import DashboardLayout from './components/layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import TasksPage from './pages/TasksPage'
import TeamsPage from './pages/TeamsPage'
import ReportsPage from './pages/ReportsPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={
        isAuthenticated ? (
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
      <Route path="/tasks" element={
        isAuthenticated ? (
          <DashboardLayout>
            <TasksPage />
          </DashboardLayout>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
      <Route path="/teams" element={
        isAuthenticated ? (
          <DashboardLayout>
            <TeamsPage />
          </DashboardLayout>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
      <Route path="/reports" element={
        isAuthenticated ? (
          <DashboardLayout>
            <ReportsPage />
          </DashboardLayout>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
      <Route path="/settings" element={
        isAuthenticated ? (
          <DashboardLayout>
            <SettingsPage />
          </DashboardLayout>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
    </Routes>
  )
}

export default App