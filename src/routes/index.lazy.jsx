import { Button } from '@/components/ui/button'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { Helmet } from 'react-helmet'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Helmet>
        <title>TekSolvers - Home</title>
      </Helmet>
      
      <div className="p-2">
        <h3>Welcome Home!</h3>
        <Button asChild>
          <Link to="/dashboard">Go to dashboard</Link>
        </Button>
      </div>
    </>
  )
}