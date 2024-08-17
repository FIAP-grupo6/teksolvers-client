import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

export const Route = createLazyFileRoute('/_private/novo-ticket')({
  component: NewTicket
})

function NewTicket() {
  return (
    <>
      <Helmet>
        <title>TekSolvers - Novo ticket</title>
      </Helmet>
      
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="main">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="main">Histórico</TabsTrigger>
              <TabsTrigger value="assistants">Assistentes A.I</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="main" className="grid grid-cols-[minmax(auto,60%)_minmax(auto,40%)] gap-0 items-start">
            <ScrollArea className="h-[calc(100vh-184px)] flex flex-col pr-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className="mb-4">
                  <CardHeader className="flex flex-row gap-4">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/9.x/personas/svg" alt="@person" className="bg-slate-100" />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>

                    <div>
                      <CardTitle>Usuário novo</CardTitle>
                      <CardDescription>
                        Empresa XPTO
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h2 className="text-2xl font-bold">Titulo do chamado</h2>
                    <span className="text-gray-300 text-sm mb-8 flex">Criado em 05/03/2024</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam distinctio dolores libero sint hic, rem, eum dolor at consequuntur in laborum, perferendis quia vel odit tempora placeat expedita nihil perspiciatis!</p>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>

            <Card x-chunk="dashboard-01-chunk-0" className="sticky top-6">
              <CardHeader>
                <CardTitle>Chamado #12323</CardTitle>
                <CardDescription>
                  Veja abaixo os tickets criados para você.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Butao</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assistants">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Assistente 1</CardTitle>
                <CardDescription>
                  Veja abaixo os tickets criados para você.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Butao</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}