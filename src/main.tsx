import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import './index.css'
import AppProvider from './providers/AppProvider'
import { SidebarProvider } from './providers/SidebarProvider'
import AuthProvider from './providers/AuthProvider'
import '@/constants/global/global'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>,
)
