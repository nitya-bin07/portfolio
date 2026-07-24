import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  )
}
