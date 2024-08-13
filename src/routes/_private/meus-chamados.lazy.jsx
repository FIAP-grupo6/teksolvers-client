import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

export const Route = createLazyFileRoute('/_private/meus-chamados')({
  component: MyTickets
})

function MyTickets() {
  return (
    <>
      <Helmet>
        <title>TekSolvers - Meus Chamados</title>
      </Helmet>
      
      <div className="p-2">Hello from meus chamados!</div>
    </>
  );
}