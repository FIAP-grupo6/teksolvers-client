import { createLazyFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet'

export const Route = createLazyFileRoute('/_private/dashboard')({
  component: Dashboard
})

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>TekSolvers - Dashboard</title>
      </Helmet>
      
      <div className="p-2">Hello from Dashboard!</div>
    </>
  )
}