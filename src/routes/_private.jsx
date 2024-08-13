import Sidebar from '@/components/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_private')({
  component: LayoutComponent
})

function LayoutComponent() {
  return (
    <div className="p-2">
      <Sidebar />

      <div>
        <Outlet />
      </div>
    </div>
  )
}