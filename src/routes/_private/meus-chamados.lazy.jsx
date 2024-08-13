import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_private/meus-chamados')({
  component: MyTickets
})

function MyTickets() {
  return <div className="p-2">Hello from meus chamados!</div>
}