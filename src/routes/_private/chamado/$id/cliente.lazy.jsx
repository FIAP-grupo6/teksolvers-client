import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
import { SendIcon, Settings } from 'lucide-react';

import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { CommentRatings } from '@/components/ratings/index';
import ReactMarkdown from 'react-markdown';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Loader from '@/components/spinner/index';

export const Route = createLazyFileRoute('/_private/chamado/$id/cliente')({
  component: TicketCliente
})

function TicketCliente() {
  const BASE_URL = "http://157.245.253.201:1337";
  const { id } = Route.useParams();

  const { data: ticketsDetailData, isFetching, isLoading } = useQuery({
    queryKey: ['ticketsDetail'],
    queryFn: () => axios.get(`${BASE_URL}/tickets/${id}`).then((response) => response.data)
  });

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    console.log('submit', e.target.description.value);
  }

  if(isFetching || isLoading) return (
    <div className="w-full min-h-screen h-full grid place-items-center">
      <Loader />
    </div>
  )

  return (
    <>
      <Helmet>
        <title>DeskBots - #{ticketsDetailData.id}</title>
      </Helmet>

      <main className="grid flex-1 w-full max-w-[1024px] m-auto items-start gap-4 p-4 sm:px-3 sm:py-0 md:gap-8">
        <Tabs defaultValue="main">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="main">Histórico</TabsTrigger>
            </TabsList>

            <Sheet className="ml-auto">
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="ml-auto sm:hidden">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[95%] sm:max-w-2xl">
                <InputCardInfosCliente className="mt-6 w-full" item={ticketsDetailData} />
              </SheetContent>
            </Sheet>
          </div>

          <TabsContent value="main" className="grid md:grid-cols-[minmax(auto,65%)_minmax(auto,450px)] grid-cols-1 gap-2 items-start">
            <Card>
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {ticketsDetailData.title}
                  </CardTitle>
                  <div className="flex gap-2 mt-0">
                    <p className="text-xs text-muted-foreground">{ticketsDetailData.id} - <span className="text-xs text-muted-foreground">{format(new Date(ticketsDetailData.createdAt), 'dd-MM-yyyy')}</span></p>
                  </div>
                </div>
                <Badge variant="secondary">{ticketsDetailData.status.title}</Badge>
              </CardHeader>
              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-19rem)] md:h-[calc(100vh-18rem)] pt-0 pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  {ticketsDetailData?.messages?.map((item, i) => (
                    <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className="mb-4 bg-muted">
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src="https://api.dicebear.com/9.x/avataaars/svg?seed=Marcio&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile" alt="@person" className="bg-slate-50" />
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">{item.user.name}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                              {formatDistance(
                                new Date(item.createdAt),
                                new Date(),
                                { addSuffix: true, locale: ptBR }
                              )}
                            </CardDescription>
                          </div>
                          <p className="text-xs text-muted-foreground"></p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ReactMarkdown className="text-sm">{item.content}</ReactMarkdown>

                        {item?.usuario?.nome === "Jarvis" && (
                          <div className="mt-6">
                            <CommentRatings rating={2.5} totalStars={5} />
                          </div>
                        )}
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

            <InputCardInfosCliente className="sticky top-6 w-full hidden sm:block" />
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}