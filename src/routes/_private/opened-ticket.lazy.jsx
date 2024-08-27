import InputCardInfos from '@/components/input-card-infos/index'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet'

export const Route = createLazyFileRoute('/_private/opened-ticket')({
  component: OpenedTicket
})

function OpenedTicket() {
  return (
    <>
      <Helmet>
        <title>Ticket Infos</title>
      </Helmet>
      
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <InputCardInfos />
      </main>
    </>
  )
}