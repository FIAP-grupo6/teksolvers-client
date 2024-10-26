import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  MoreHorizontal
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent
} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import mock from '@/mock/tickets.json';
import { Link } from '@tanstack/react-router';
import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { BotIcon, CheckCheck, Clock10, MessageCircle, Star, CirclePlus } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Files from '@/components/files/index';
import { useState } from 'react';
import Loader from '@/components/spinner/index';

export const Route = createLazyFileRoute('/_private/chamados')({
  component: MyTickets
})

const BASE_URL = "http://157.245.253.201:1337";

export function MyTickets() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: ticketData, refetch } = useQuery({
    queryKey: ['tickets'],
    queryFn: () => axios.get(`${BASE_URL}/tickets`).then((response) => response.data)
  });

  const mutation = useMutation({
    mutationFn: () => {
      return axios.post(`${BASE_URL}/tickets`, {
        title: title,
        statusId: "3ffed123-f9e4-4e6a-8668-d1540fa0b33c",
        priorityId: "2077ce0a-9581-4724-ab9d-8978284f8a7b",
        tags: [],
        userId: "7d8fa820-5c8b-4794-bc15-80b4c6632d39",
        complexityId: "182cdd6f-d520-4b0c-b77a-6ff86363b6d9",
        message: message
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => response.data);
    },
    onSuccess: () => {
      setIsModalOpen(false)
      setTitle('')
      setMessage('')
      refetch()
    }
  })

  return (
    <>
      <Helmet>
        <title>DeskBots - Meus Chamados</title>
      </Helmet>

      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader className="flex justify-between flex-row">
                <div>
                  <CardTitle>Tickets</CardTitle>
                  <CardDescription>
                    Veja abaixo os tickets criados para você.
                  </CardDescription>
                </div>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                      <CirclePlus className="stroke-1 mr-1" />
                      <p>Criar ticket</p>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[90vw] md:max-w-[60vw]">
                    <DialogTitle>Criando seu Ticket</DialogTitle>
                    <DialogDescription>
                      Descreva no campo abaixo o que está acontecendo, detalhe o máximo possível.<br/>
                      Não esqueça de anexar evidências, elas ajudam muito nosso consultor a direcionar e
                      resolver o problema mais rapidamente.
                    </DialogDescription>
                    <div className="mt-2">
                      <Label>Título</Label>
                      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <Label>Descrição</Label>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-40" />
                    <Files />
                    <Button className="h-10" onClick={() => mutation.mutate()} disabled={mutation.isPending}>
                      {mutation.isPending ? (
                        <Loader className="w-4 h-4 text-white" />
                      ) : 'Criar ticket'}
                    </Button>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="">#</span>
                      </TableHead>
                      <TableHead>Titulo</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Prioridade
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Última atualização
                      </TableHead>
                      <TableHead>
                        <span>Ações</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ticketData?.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="hidden sm:table-cell text-xs">
                          {item.id.substring(0, 6)}
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="flex gap-1 w-fit items-center">
                            {/* <StarIcon className="h-4 w-4" /> */}
                            {item.status.title === "Em andamento" && (<Clock10 className="text-orange-300 h-4 w-4" />)}
                            {item.status.title === "Pendente" && (<Clock10 className="text-orange-300 h-4 w-4" />)}
                            {item.status.title === "Aberto" && (<Star className="text-blue-300 h-4 w-4" />)}
                            {item.status.title === "Concluído" && (<CheckCheck className="text-green-300 h-4 w-4" />)}
                            {item.status.title}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge className={cn({
                            'bg-gray-400': item.priority.title === 'Aguardando',
                            'bg-red-700': item.priority.title === 'Crítica',
                            'bg-red-400': item.priority.title === 'Alta',
                            'bg-yellow-400': item.priority.title === 'Média',
                            'bg-green-400': item.priority.title === 'Baixa',
                            'text-white': item.priority.title === 'Crítica'
                          })}>{item.priority.title}</Badge>
                        </TableCell>
                        
                        <TableCell className="hidden md:table-cell space-x-2">
                          {format(new Date(item.createdAt), 'dd-MM-yyyy')}
                          <p className="text-xs text-muted-foreground">{formatDistance(
                            new Date(item.createdAt),
                            new Date(),
                            { addSuffix: true, locale: ptBR }
                          )}</p>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Link to={`/chamado/${item.id}/consultor`}>Ver como consultor</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Link to={`/chamado/${item.id}/cliente`}>Ver como cliente</Link>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Exibindo <strong>1-{ticketData?.length}</strong> de <strong>{ticketData?.length}</strong>{" "}
                  tickets
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}