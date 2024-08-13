import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_private/dashboard')({
  component: Dashboard
})

function Dashboard() {
  return <div className="p-2">Hello from Dashboard!</div>
}