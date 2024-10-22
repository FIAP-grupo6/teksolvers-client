import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

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

export const Route = createLazyFileRoute('/_private/chamados')({
  component: MyTickets
})

export function MyTickets() {
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">
                      <CirclePlus className="stroke-1 mr-1" />
                      <p>Criar Ticket</p>
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
                      <Label>Assunto</Label>
                      <Input />
                    </div>
                    <Textarea className="h-40" />
                    <Files />
                    <Button className="h-10">Enviar Ticket</Button>
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
                        Notificações
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
                    {mock.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="hidden sm:table-cell text-xs">
                          {item.numero}
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.titulo}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="flex gap-1 w-fit items-center">
                            {/* <StarIcon className="h-4 w-4" /> */}
                            {item.status === "Em andamento" && (<Clock10 className="text-orange-300 h-4 w-4" />)}
                            {item.status === "Pendente" && (<Clock10 className="text-orange-300 h-4 w-4" />)}
                            {item.status === "Aberto" && (<Star className="text-blue-300 h-4 w-4" />)}
                            {item.status === "Concluído" && (<CheckCheck className="text-green-300 h-4 w-4" />)}
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge className={cn({
                            'bg-red-700': item.prioridade === 'Crítica',
                            'bg-red-400': item.prioridade === 'Alta',
                            'bg-yellow-400': item.prioridade === 'Média',
                            'bg-green-400': item.prioridade === 'Baixa',
                            'text-white': item.prioridade === 'Crítica'
                          })}>{item.prioridade}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="flex gap-1">
                            <Tooltip>
                              <TooltipTrigger>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                  <BotIcon className="h-4 w-4" /> {item.notificacoes.agentes}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                {item.notificacoes.agentes > 0 ? (
                                  <p>Você tem {item.notificacoes.agentes} {item.notificacoes.agentes > 1 ? 'mensagens' : 'mensagem'} de assistentes </p>
                                ) : (
                                  <p>Você não tem novas mensagens de assistentes</p>
                                )}
                              </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                              <TooltipTrigger>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                  <MessageCircle className="h-4 w-4" /> {item.notificacoes.mensagens}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                {item.notificacoes.mensagens > 0 ? (
                                  <p>Você tem {item.notificacoes.mensagens} {item.notificacoes.mensagens > 1 ? 'mensagens' : 'mensagem'} do cliente</p>
                                ) : (
                                  <p>Você não tem novas mensagens do cliente</p>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell space-x-2">
                          {format(new Date(item.data_edicao), 'dd-MM-yyyy')}
                          <p className="text-xs text-muted-foreground">{formatDistance(
                            new Date(item.data_edicao),
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
                                <Link to={`/chamado/${item.numero}/consultor`}>Ver como consultor</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Link to={`/chamado/${item.numero}/cliente`}>Ver como cliente</Link>
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
                  Exibindo <strong>1-{mock.length}</strong> de <strong>{mock.length}</strong>{" "}
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