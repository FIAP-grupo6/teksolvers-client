import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

import InputCardInfosCliente from '@/components/input-card-infos/cliente';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import items from '@/mock/tickets.json';
import { SendIcon } from 'lucide-react';
import { useMemo } from 'react';

import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Badge } from '@/components/ui/badge';

export const Route = createLazyFileRoute('/_private/chamado/$id/cliente')({
  component: TicketCliente
})

function TicketCliente() {
  const { id } = Route.useParams();

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    console.log('submit', e.target.description.value);
  }

  const mock = useMemo(() => {
    return items.find(item => item.numero === id);
  }, [id])

  return (
    <>
      <Helmet>
        <title>TekSolvers - #{mock.numero}</title>
      </Helmet>

      <main className="grid flex-1 max-w-7xl m-auto items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="main">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="main">Histórico</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="main" className="grid grid-cols-[minmax(auto,65%)_minmax(auto,450px)] gap-2 items-start">
            <Card>
            <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {mock.titulo}
                  </CardTitle>
                  <div className="flex gap-2 mt-0">
                    <p className="text-xs text-muted-foreground">{mock.numero} - <span className="text-xs text-muted-foreground">{format(new Date(mock.data_criacao), 'dd-MM-yyyy')}</span></p>
                  </div>
                </div>
                <Badge variant="secondary">{mock.status}</Badge>
              </CardHeader>
              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-11rem)] pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  {mock.mensagens.map((item, i) => (
                    <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className="mb-4 bg-muted">
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src={item.usuario.imagem} alt="@person" className="bg-slate-50" />
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">{item.usuario.nome}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                              {formatDistance(
                                new Date(item.data),
                                new Date(),
                                { addSuffix: true, locale: ptBR }
                              )}
                            </CardDescription>
                          </div>
                          <p className="text-xs text-muted-foreground"></p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.mensagem}</p>
                      </CardContent>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>

              <CardFooter className="border-t p-4">
                <form className="flex items-center w-full space-x-2" onSubmit={handleSubmitMessage}>
                  <Input id="message" placeholder="Escreva aqui sua mensagem" className="flex-1" autoComplete="off" />
                  <Button type="submit" size="icon">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Enviar</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>

            <InputCardInfosCliente className="sticky top-6 w-full" />
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}