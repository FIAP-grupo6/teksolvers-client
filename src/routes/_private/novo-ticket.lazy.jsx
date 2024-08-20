import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';


import { MinimalTiptapEditor } from '@/components/minimal-tiptap/index';
import InputCardInfos from '@/components/opened-ticket/input-card-infos/index';
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

      <main className="grid flex-1 max-w-7xl m-auto items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="main">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="main">Histórico</TabsTrigger>
              <TabsTrigger value="assistants">Assistentes A.I</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="main" className="grid grid-cols-[minmax(auto,65%)_minmax(auto,450px)] gap-2 items-start">
            <div>
              <ScrollArea className="h-[calc(100vh-284px)] border-b rounded-md flex flex-col pr-3">
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
              <MinimalTiptapEditor
                throttleDelay={2000}
                className="w-full min-h-32 mt-6 bg-white"
                editorContentClassName="p-5"
                output="html"
                placeholder="Descreva o problema aqui"
                autofocus={true}
                immediatelyRender={true}
                editable={true}
                injectCSS={true}
                editorClassName="focus:outline-none"
              />
            </div>

            <InputCardInfos className="sticky top-6 w-full" />
          </TabsContent>

          <TabsContent value="assistants" className="w-full">
            <Card x-chunk="dashboard-06-chunk-0" className="w-full">
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