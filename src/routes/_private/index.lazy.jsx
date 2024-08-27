import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Pie, PieChart, Label as PieLabel } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const Route = createLazyFileRoute("/_private/")({
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

function Dashboard() {
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  function handleSwitchChange() {
    setIsSwitchChecked(!isSwitchChecked);
  }

  const totalChamados = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.chamados, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>TekSolvers - Dashboard</title>
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
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Boo" alt="@robot" className="bg-slate-50" />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <CardTitle>Astro</CardTitle>
                  </div>
                  <CardDescription>
                    Agente responsável por geras <strong>TAGS</strong> do chamado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch id="astro" onClick={handleSwitchChange} checked={isSwitchChecked} />
                    <Label htmlFor="astro">{isSwitchChecked ? 'Agente ligado' : 'Agente desligado'}</Label>
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
                    Agente responsável por definir a <strong>PRIORIDADE</strong> do chamado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch id="c3po" checked />
                    <Label htmlFor="c3po">Agente ligado</Label>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Spooky&flip=true&backgroundColor=3949ab,d1d4f9&backgroundType=solid,gradientLinear&backgroundRotation=360,-360,-330,-320&eyes=sensor&mouth=diagram" alt="@robot" className="bg-slate-50" />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <CardTitle>R2-D2</CardTitle>
                  </div>
                  <CardDescription>
                    Agente responsável por definir o <strong>RESPONSÁVEL</strong> do chamado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch id="r2d2" checked />
                    <Label htmlFor="r2d2">Agente ligado</Label>
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
                    Agente responsável por por definir o <strong>TIPO</strong> do chamado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch id="baymax" checked />
                    <Label htmlFor="baymax">Agente ligado</Label>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Harley" alt="@robot" className="bg-slate-50" />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <CardTitle>WALL-E</CardTitle>
                  </div>
                  <CardDescription>
                    Agente responsável por por definir o <strong>NÍVEL</strong> do chamado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch id="wall-e" checked />
                    <Label htmlFor="wall-e">Agente ligado</Label>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Boots&eyes=eva&mouth=smile01" alt="@robot" className="bg-slate-50" />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <CardTitle>EVA</CardTitle>
                  </div>
                  <CardDescription>
                    Agente responsável por por sugerir a <strong>SOLUÇÃO</strong> do chamado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch id="eva" checked />
                    <Label htmlFor="eva">Agente ligado</Label>
                  </div>
                </CardContent>
              </Card>
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
              <Card className="bg-slate-50 rounded-lg shadow-md p-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h2 className="text-sm font-semibold">ServiceDesk</h2>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Disponível</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Card>
              <Card className="bg-slate-50 rounded-lg shadow-md p-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h2 className="text-sm font-semibold">SAP</h2>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Disponível</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Card>
              <Card className="bg-slate-50 rounded-lg shadow-md p-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h2 className="text-sm font-semibold">AMS</h2>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Indisponível</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Card>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
