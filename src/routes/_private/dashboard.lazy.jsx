import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

export const Route = createLazyFileRoute("/_private/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>TekSolvers - Dashboard</title>
      </Helmet>

      <main className="grid flex-1 max-w-8xl m-0 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="p1">Plataforma 1</TabsTrigger>
            <TabsTrigger value="p2">Plataforma 2</TabsTrigger>
            <TabsTrigger value="p3">Plataforma 3</TabsTrigger>
            <TabsTrigger value="todas">Todas</TabsTrigger>
          </TabsList>
          <TabsContent value="p1" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>
                  Analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">

              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Agentes</CardTitle>
                <CardDescription>
                  Robôs Especializados
                </CardDescription>
              </CardHeader>
              <CardContent className="grid w-full grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Avatar className="mr-2">
                        <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Boo" alt="@robot" className="bg-slate-50" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <CardTitle>ASTRO</CardTitle>
                    </div>
                    <CardDescription>
                      Agente Responsável por geras TAGS do chamado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Switch id="astro" />
                      <Label htmlFor="astro">Agente Ligado</Label>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Avatar className="mr-2">
                        <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Patches" alt="@robot" className="bg-slate-50" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <CardTitle>C-3PO</CardTitle>
                    </div>
                    <CardDescription>
                      Agente Responsável por definir a PRIORIDADE do chamado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Switch id="astro" />
                      <Label htmlFor="astro">Agente Ligado</Label>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Avatar className="mr-2">
                        <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Samantha" alt="@robot" className="bg-slate-50" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <CardTitle>R2-D2</CardTitle>
                    </div>
                    <CardDescription>
                      Agente Responsável por definir o RESPONSÁVEL do chamado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Switch id="astro" />
                      <Label htmlFor="astro">Agente Ligado</Label>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Avatar className="mr-2">
                        <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Sammy" alt="@robot" className="bg-slate-50" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <CardTitle>Baymax</CardTitle>
                    </div>
                    <CardDescription>
                      Agente Responsável por por definir o TIPO do chamado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Switch id="astro" />
                      <Label htmlFor="astro">Agente Ligado</Label>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="p2">
            <Card>
              <CardHeader>
                <CardTitle>Plataforma 2</CardTitle>
                <CardDescription>TekSolver | Dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="p3">
            <Card>
              <CardHeader>
                <CardTitle>Plataforma 3</CardTitle>
                <CardDescription>TekSolver | Dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="todas">
            <Card>
              <CardHeader>
                <CardTitle>Todas plataformas</CardTitle>
                <CardDescription>TekSolver | Dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
