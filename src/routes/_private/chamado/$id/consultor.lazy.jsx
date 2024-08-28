import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

import InputCardInfos from '@/components/input-card-infos/index';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import Spinner from '@/components/ui/spinner';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import items from '@/mock/tickets.json';
import { format } from 'date-fns';
import { Check, SendIcon } from 'lucide-react';
import { useMemo } from 'react';

export const Route = createLazyFileRoute('/_private/chamado/$id/consultor')({
  component: TicketConsultor
})

function TicketConsultor() {
  const { id } = Route.useParams();
  console.log(id)

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
              <TabsTrigger value="assistants">Assistentes A.I</TabsTrigger>
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

              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-16rem)] pt-0 pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  {mock.mensagens.map((item, i) => (
                    <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className={`mb-4 ${i % 2 === 0 ? 'bg-muted' : 'bg-slate-200'}`} >
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src={item.usuario.imagem} alt="@person" className="bg-slate-50" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">{item.usuario.nome}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                              5 dias atrás
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
                  <Input id="message" placeholder="Descreva aqui o problema" className="flex-1" autoComplete="off" />
                  <Button type="submit" size="icon">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>

            <InputCardInfos className="sticky top-6 w-full" />
          </TabsContent>

          <TabsContent value="assistants" className="mt-0 grid grid-cols-[minmax(auto,65%)_minmax(auto,450px)] gap-2 items-start">
            <Card>
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle>
                    TASK0944775
                  </CardTitle>
                  <span className="text-xs text-muted-foreground">23/04/2024</span>
                </div>
                <Badge variant="secondary">Aberto</Badge>
              </CardHeader>

              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-16rem)] pt-0 pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  <Card x-chunk="dashboard-01-chunk-0" className="mb-4 bg-muted">
                    <CardHeader className="flex flex-row gap-2">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Patches" alt="@person" className="bg-slate-50" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>

                      <div className="flex items-center justify-between w-full">
                        <div>
                          <CardTitle className="font-medium text-sm">C-3PO</CardTitle>
                          <CardDescription className="text-xs text-muted-foreground">
                            5 minutos atrás
                          </CardDescription>
                        </div>
                        <p className="text-xs text-muted-foreground"></p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Olá! <br /><br /> Classifiquei este chamado com prioridade <Badge className="bg-green-500">Baixa</Badge> levando em consideração os critérios descritos. <br />Você pode alterar manualmente a prioridade caso considere necessário.</p>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-01-chunk-0" className="mb-4 bg-muted">
                    <CardHeader className="flex flex-row gap-2">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Samantha" alt="@person" className="bg-slate-50" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>

                      <div className="flex items-center justify-between w-full">
                        <div>
                          <CardTitle className="font-medium text-sm">R2-D2</CardTitle>
                          <CardDescription className="text-xs text-muted-foreground">
                            2 minutos atrás
                          </CardDescription>
                        </div>
                        <p className="text-xs text-muted-foreground"></p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Hey! <br /><br /> Atribuí algumas pessoas que podem lhe ajudar a resolver este </p>
                      <div className="flex gap-2 mt-4">
                        <Badge className="rounded-3xl p-0.5 pr-2 bg-muted-foreground">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Precious" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <p className="pl-2">Consultor júnior</p>
                        </Badge>

                        <Badge className="rounded-3xl p-0.5 pr-2 bg-muted-foreground">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Lola" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <p className="pl-2">Consultor sênior</p>
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {Array.from({ length: 0 }).map((_, i) => (
                    <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className="mb-4 bg-muted">
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src="https://api.dicebear.com/9.x/personas/svg" alt="@person" className="bg-slate-50" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">Usuário novo</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                              5 dias atrás
                            </CardDescription>
                          </div>
                          <p className="text-xs text-muted-foreground"></p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam distinctio dolores libero sint hic, rem, eum dolor at consequuntur in laborum, perferendis quia vel odit tempora placeat expedita nihil perspiciatis!</p>
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
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>

            <Card className="w-[450px]">
              <CardHeader>
                <CardTitle>Seus assistentes</CardTitle>
                <CardDescription>Acompanhe abaixo o progresso do trabalho de seus assistentes.</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Boo" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <CardTitle>Astro</CardTitle>

                  <Spinner className="ml-auto" />
                </Card>

                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Patches" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>

                  <CardTitle>C-3PO</CardTitle>

                  <Check className="ml-auto h-4 w-4 text-green-500" />
                </Card>

                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Samantha" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <CardTitle>R2-D2</CardTitle>

                  <Check className="ml-auto h-4 w-4 text-green-500" />
                </Card>

                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Sammy" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <CardTitle>Baymax</CardTitle>

                  <Spinner className="ml-auto" />
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}