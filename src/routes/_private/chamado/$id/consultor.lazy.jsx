import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import InputCardInfos from '@/components/input-card-infos/index';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
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
import { Check, Clock10, FileIcon, SendIcon, Settings } from 'lucide-react';
import { useMemo } from 'react';
import { CommentRatings } from '@/components/ratings/index';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Loader from '@/components/spinner/index';
import ReactMarkdown from 'react-markdown'

export const Route = createLazyFileRoute('/_private/chamado/$id/consultor')({
  component: TicketConsultor
})

function TicketConsultor() {
  const BASE_URL = "http://157.245.253.201:1337";
  const { id } = Route.useParams();

  const { data: ticketsDetailData, isFetching, isLoading } = useQuery({
    queryKey: ['ticketsDetail'],
    queryFn: () => axios.get(`${BASE_URL}/tickets/${id}`).then((response) => response.data)
  });

  const { data: assistantsData } = useQuery({
    queryKey: ['assistants'],
    queryFn: () => axios.get(`${BASE_URL}/assistants`).then((response) => response.data)
  });

  console.log(ticketsDetailData)

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    console.log('submit', e.target.description.value);
  }


  const renderOptions = (item) => {
    if (item.assistant.name === "Ultron") {
      return (
        <>
          <div className="mt-6">
            {item.files?.map((file, index) => (
              <Tooltip key={`it_file_${index}`}>
                <TooltipTrigger>
                  <Badge variant="outline" className="rounded-full px-3 py-1.5">
                    <FileIcon className="w-4 mr-2" />
                    <p>{file?.arquivo}</p>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  Baixar arquivo
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {item?.novo && (
            <div className="text-xs w-full flex flex-col items-start space-y-2 mt-8">
              <p>Você deseja disponibilizar este arquivo para sua equipe?</p>
              <div className="flex gap-2">
                <Button className="text-xs" variant="outline">Não</Button>
                <Button className="text-xs">Sim</Button>
              </div>
            </div>
          )}
        </>
      )
    }

    if (item?.assistant?.name === "EVA") {
      if (item?.status?.title === "Concluído") {
        return (
          <Badge variant="outline" className="text-xs w-fit flex flex-row items-center mt-8">
            <p>Você aceitou minha resposta como solução.</p>
          </Badge>
        )
      }

      return (
        <div className="text-xs w-full flex flex-col items-start space-y-2 mt-8">
          <p>Minha resposta ajudou a solucionar o problema?</p>
          <div className="flex gap-2">
            <Button className="text-xs" variant="outline">Não</Button>
            <Button className="text-xs">Sim</Button>
          </div>
        </div>
      )
    }

    if (item.assistant.name === "WALL-E") {
      if (item.status?.title === "Concluído") {
        return (
          <Badge variant="outline" className="text-xs w-fit flex flex-row items-center mt-8">
            <p>Você aceitou minha sugestão de complexidade.</p>
          </Badge>
        )
      }

      return (
        <div className="text-xs w-full flex flex-col items-start space-y-2 mt-8">
          <p>Você deseja aceitar minha sugestão?</p>
          <div className="flex gap-2">
            <Button className="text-xs" variant="outline">Recusar</Button>
            <Button className="text-xs">Aceitar</Button>
          </div>
        </div>
      )
    }
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
              <TabsTrigger value="assistants">Assistentes A.I</TabsTrigger>
            </TabsList>

            <Sheet className="ml-auto">
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="ml-auto sm:hidden">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[95%] sm:max-w-2xl">
                <InputCardInfos className="mt-6 w-full" item={ticketsDetailData} />
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
                    <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className={`mb-4 bg-muted`} >
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
                  <Input id="message" placeholder="Descreva aqui o problema" className="flex-1" autoComplete="off" />
                  <Button type="submit" size="icon">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Enviar</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>

            <InputCardInfos className="sticky top-6 w-full hidden sm:block" item={ticketsDetailData} />
          </TabsContent>

          <TabsContent value="assistants" className="grid md:grid-cols-[minmax(auto,65%)_minmax(auto,450px)] grid-cols-1 gap-2 items-start">
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
                <div className="flex md:flex-row flex-col gap-2">
                  {/* {ticketsDetailData.status.title !== "Concluído" && (
                    <Button className="text-xs">Aceitar todas as sugestões</Button>
                  )} */}
                  <Badge variant="secondary" className="w-fit">{ticketsDetailData.status.title}</Badge>
                </div>
              </CardHeader>

              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-16rem)] pt-0 pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  {ticketsDetailData?.assistantMessages?.map((item) => (
                    <Card key={`assistant_message_${item.id}`} x-chunk="dashboard-01-chunk-0" className="mb-4 bg-muted">
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src={item.assistant.avatar} alt={item.assistant.name} className="bg-slate-50" />
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">{item.assistant.name}</CardTitle>
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

                        {renderOptions(item, ticketsDetailData)}
                      </CardContent>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>

              <CardFooter className="border-t p-4">
                <form className="flex items-center w-full space-x-2" onSubmit={handleSubmitMessage}>
                  <Input id="message" placeholder="Converse com seus assistentes" className="flex-1" autoComplete="off" />
                  <Button type="submit" size="icon">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Enviar</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>

            <Card className="md:w-[450px] w-full">
              <CardHeader>
                <CardTitle>Seus assistentes</CardTitle>
                <CardDescription>Acompanhe abaixo o progresso do trabalho de seus assistentes.</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                {assistantsData && assistantsData.length > 0 ? (
                  assistantsData.map((item) => (
                    <Card key={`assistant_${item.id}`} className="flex py-2 px-4 items-center bg-muted">
                      <Avatar className="mr-2">
                        <AvatarImage src={item.avatar} alt="@robot" className="bg-slate-50" />
                      </Avatar>
                      <CardTitle className="mr-auto">{item.name}</CardTitle>
                      {ticketsDetailData.assistantMessages.find(message => message.assistant.name === item.name) ? (
                        <Tooltip>
                          <TooltipTrigger>
                            <Check className="h-4 w-4 text-green-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Finalizado</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <Tooltip>
                          <TooltipTrigger>
                            <Clock10 className="ml-auto h-4 w-4 text-orange-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Assistente trabalhando</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </Card>
                  ))
                ) : (
                  <p>Nenhum assistente encontrado.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}