import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import agents from "@/mock/agents";
import integrations from "@/mock/integrations";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, Label as PieLabel, XAxis, YAxis } from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import Files from "@/components/files/index";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/_private/dashboard")({
  component: Dashboard,
});

const chartData = [
  { time: "Suporte", chamados: 52, fill: "var(--color-suporte)" },
  { time: "Tributário", chamados: 23, fill: "var(--color-tributario)" },
  { time: "Comercial", chamados: 15, fill: "var(--color-comercial)" },
  { time: "Legado", chamados: 12, fill: "var(--color-legado)" },
]
const chartConfig = {
  suporte: {
    label: "Suporte",
    color: "hsl(var(--chart-2))",
  },
  tributario: {
    label: "Tributário",
    color: "hsl(var(--chart-1))",
  },
  comercial: {
    label: "Comercial",
    color: "hsl(var(--chart-4))",
  },
  legado: {
    label: "Legado",
    color: "hsl(var(--chart-3))",
  },
}

const chartDataTicketsSLA = [
  { date: "2024-08-01", SLA: 222, naoSLA: 150 },
  { date: "2024-08-02", SLA: 97, naoSLA: 180 },
  { date: "2024-08-03", SLA: 167, naoSLA: 120 },
  { date: "2024-08-04", SLA: 242, naoSLA: 260 },
  { date: "2024-08-05", SLA: 373, naoSLA: 290 },
  { date: "2024-08-06", SLA: 301, naoSLA: 340 },
  { date: "2024-08-07", SLA: 245, naoSLA: 180 },
  { date: "2024-08-08", SLA: 409, naoSLA: 320 },
  { date: "2024-08-09", SLA: 59, naoSLA: 110 },
  { date: "2024-08-10", SLA: 261, naoSLA: 190 },
  { date: "2024-08-11", SLA: 327, naoSLA: 350 },
  { date: "2024-08-12", SLA: 292, naoSLA: 210 },
  { date: "2024-08-13", SLA: 342, naoSLA: 380 },
  { date: "2024-08-14", SLA: 137, naoSLA: 220 },
  { date: "2024-08-15", SLA: 120, naoSLA: 170 },
  { date: "2024-08-16", SLA: 138, naoSLA: 190 },
  { date: "2024-08-17", SLA: 446, naoSLA: 360 },
  { date: "2024-08-18", SLA: 364, naoSLA: 410 },
  { date: "2024-08-19", SLA: 243, naoSLA: 180 },
  { date: "2024-08-20", SLA: 89, naoSLA: 150 },
  { date: "2024-08-21", SLA: 137, naoSLA: 200 },
  { date: "2024-08-22", SLA: 224, naoSLA: 170 },
  { date: "2024-08-23", SLA: 138, naoSLA: 230 },
  { date: "2024-08-24", SLA: 387, naoSLA: 290 },
  { date: "2024-08-25", SLA: 215, naoSLA: 250 },
  { date: "2024-08-26", SLA: 75, naoSLA: 130 },
  { date: "2024-08-27", SLA: 383, naoSLA: 420 },
  { date: "2024-08-28", SLA: 122, naoSLA: 180 },
  { date: "2024-08-29", SLA: 315, naoSLA: 240 },
  { date: "2024-08-30", SLA: 454, naoSLA: 380 },
  { date: "2024-08-31", SLA: 454, naoSLA: 380 },
]

const chartConfigTicketsSLA = {
  naoSLA: {
    label: "Não cumprindo o SLA",
    color: "hsl(var(--chart-1))",
  },
  SLA: {
    label: "Cumprindo o SLA",
    color: "hsl(var(--chart-2))",
  },
}

const chartDataCategoria = [
  { time: "Suporte", chamados: 38, fill: "var(--color-suporte)" },
  { time: "Treinamento", chamados: 13, fill: "var(--color-treinamento)" },
  { time: "Dúvida", chamados: 19, fill: "var(--color-duvida)" },
  { time: "Desenvolvimento", chamados: 28, fill: "var(--color-desenvolvimento)" },
  { time: "Duplicado/Cancelado", chamados: 16, fill: "var(--color-duplicadoCancelado)" },
  { time: "Não Informado", chamados: 12, fill: "var(--color-naoInformado)" },
]

const chartConfigCategoria = {
  suporte: {
    label: "Suporte",
    color: "hsl(var(--chart-2))",
  },
  treinamento: {
    label: "Treinamento",
    color: "hsl(var(--chart-1))",
  },
  duvida: {
    label: "Dúvida",
    color: "hsl(var(--chart-4))",
  },
  desenvolvimento: {
    label: "Desenvolvimento",
    color: "hsl(var(--chart-3))",
  },
  duplicadoCancelado: {
    label: "Duplicado/Cancelado",
    color: "hsl(var(--chart-5))",
  },
  naoInformado: {
    label: "Não Informado",
    color: "hsl(var(--chart-6))",
  },
}

const chartDataPendente = [
  { time: "suporte", tickets: 18, fill: "var(--color-suporte)" },
  { time: "squad1", tickets: 7, fill: "var(--color-squad1)" },
  { time: "squad2", tickets: 3, fill: "var(--color-squad2)" },
  { time: "squad3", tickets: 12, fill: "var(--color-squad3)" },
  { time: "squad4", tickets: 5, fill: "var(--color-squad4)" },
]

const chartConfigPendente = {
  suporte: {
    label: "Suporte",
    color: "hsl(var(--chart-1))",
  },
  squad1: {
    label: "Squad 1",
    color: "hsl(var(--chart-2))",
  },
  squad2: {
    label: "Squad 2",
    color: "hsl(var(--chart-3))",
  },
  squad3: {
    label: "Squad 3",
    color: "hsl(var(--chart-4))",
  },
  squad4: {
    label: "Squad 4",
    color: "hsl(var(--chart-5))",
  },
}

function Dashboard() {
  const [timeRange, setTimeRange] = useState("90d")

  const totalChamados = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.chamados, 0)
  }, [])

  const filteredData = chartDataTicketsSLA.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <>
      <Helmet>
        <title>DeskBots - Dashboard</title>
      </Helmet>

      <main className="grid flex-1 max-w-8xl m-0 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>
              Analytics
            </CardDescription>
          </CardHeader>
          <CardContent className="grid w-full grid-cols-3 gap-4">
            <Card className="flex flex-col">
              <CardHeader className="items-center pb-0">
                <CardTitle>Tickets abertos</CardTitle>
                <CardDescription>Por equipe</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartData}
                      dataKey="chamados"
                      nameKey="time"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      <PieLabel
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  className="fill-foreground text-3xl font-bold"
                                >
                                  {totalChamados.toLocaleString()}
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 24}
                                  className="fill-muted-foreground"
                                >
                                  Tickets
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="items-center pb-0">
                <CardTitle>Tickets abertos</CardTitle>
                <CardDescription>Por categoria</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfigCategoria}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartDataCategoria}
                      dataKey="chamados"
                      nameKey="time"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      <PieLabel
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  className="fill-foreground text-3xl font-bold"
                                >
                                  {totalChamados.toLocaleString()}
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 24}
                                  className="fill-muted-foreground"
                                >
                                  Tickets
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Tickets Pendentes</CardTitle>
                <CardDescription>Por time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfigPendente}>
                  <BarChart
                    accessibilityLayer
                    data={chartDataPendente}
                    layout="vertical"
                    margin={{
                      left: 0,
                    }}
                  >
                    <YAxis
                      dataKey="time"
                      type="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) =>
                        chartConfigPendente[value]?.label
                      }
                    />
                    <XAxis dataKey="tickets" type="number" hide />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="tickets" layout="vertical" radius={5} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                  <CardTitle>Tickets fechados</CardTitle>
                  <CardDescription>Por SLA</CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger
                    className="w-[160px] rounded-lg sm:ml-auto"
                    aria-label="Select a value"
                  >
                    <SelectValue placeholder="Último mês" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="30d" className="rounded-lg">
                      Últimos 30 dias
                    </SelectItem>
                    <SelectItem value="7d" className="rounded-lg">
                      Últimos 7 dias
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                  config={chartConfigTicketsSLA}
                  className="aspect-auto h-[250px] w-full"
                >
                  <AreaChart data={filteredData}>
                    <defs>
                      <linearGradient id="fillSLA" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-SLA)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-SLA)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient id="fillnaoSLA" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-naoSLA)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-naoSLA)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      minTickGap={32}
                      tickFormatter={(value) => {
                        const date = new Date(value)
                        return date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })
                          }}
                          indicator="dot"
                        />
                      }
                    />
                    <Area
                      dataKey="naoSLA"
                      type="natural"
                      fill="url(#fillnaoSLA)"
                      stroke="var(--color-naoSLA)"
                      stackId="a"
                    />
                    <Area
                      dataKey="SLA"
                      type="natural"
                      fill="url(#fillSLA)"
                      stroke="var(--color-SLA)"
                      stackId="a"
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <div className="grid grid-cols-[minmax(auto,auto)_minmax(auto,450px)] gap-2">
          <Card>
            <CardHeader>
              <CardTitle>Agentes</CardTitle>
              <CardDescription>
                Robôs Especializados
              </CardDescription>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-3 gap-4">
              {agents.map((agent) => (
                <Card key={`agent_item_${agent.id}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="mr-2">
                          <AvatarImage src={agent.imagem} alt="@robot" className="bg-slate-50" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>
                        <CardTitle>{agent.nome}</CardTitle>
                      </div>
                      <div className="-mr-3 -mt-10 flex align-middle gap-3">
                        <Dialog>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <DialogTrigger asChild className={cn({'pointer-events-none opacity-10': !agent.ativo})}>
                                  <Settings className="h-5 w-5 hover:cursor-pointer" />
                                </DialogTrigger>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Configurar Agente</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <DialogContent className="sm:max-w-[80vw] md:max-w-[50vw]">
                            <DialogHeader>
                              <DialogTitle>{agent.nome}</DialogTitle>
                              <DialogDescription>
                                {agent.descricao}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="gap-4 flex flex-col">
                              <div>
                                <Label>Instruções de comando</Label>
                                <Textarea className="h-24" placeholder="Digite os comandos do Agente" value={agent?.prompt} readOnly/>
                              </div>
                              <div>
                                <Label>Modelo do Agente</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione um modelo" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Modelos</SelectLabel>
                                      <SelectItem value="GPT-4o">GPT-4o</SelectItem>
                                      <SelectItem value="GPT-4-Turbo">GPT-4 Turbo</SelectItem>
                                      <SelectItem value="o1-mini">o1-mini</SelectItem>
                                      <SelectItem value=">DALL-E">DALL·E</SelectItem>
                                      <SelectItem value="GPT-3.5-Turbo">GPT-3.5 Turbo</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Files label="Arquivos complementares" />
                            </div>
                            <DialogFooter>
                              <Button type="submit">Salvar Configurações</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardDescription>
                      {agent.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Switch id={`agent_switch_${agent.id}`} checked={agent.ativo} />
                      <Label htmlFor={`agent_switch_${agent.id}`}>{agent.ativo ? 'Agente ligado' : 'Agente desligado'}</Label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrações</CardTitle>
              <CardDescription>
                Acompanhe abaixo a saúde das integrações com os sistemas que criam os chamados.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 items-start">
              {integrations.map((integration) => (
                <Card key={`integration_item_${integration.id}`} className="bg-slate-50 rounded-lg shadow-md p-4 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <h2 className="text-sm font-semibold">{integration.nome}</h2>
                    </div>
                    <Tooltip>
                      <TooltipTrigger>
                        {integration.status === "Disponível" ? (
                          <div className="h-3 w-3 rounded-full bg-green-500" />
                        ) : (
                          <div className="h-3 w-3 rounded-full bg-red-500" />
                        )}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{integration.status}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>

      <Separator className="mt-16" />

      <footer className="flex items-center justify-center w-full py-2 text-sm text-muted-foreground">
        <span>© 2024 DeskBots. Todos os direitos reservados.</span>
      </footer>
    </>
  );
}
