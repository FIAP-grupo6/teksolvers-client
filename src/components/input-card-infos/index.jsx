import Files from "@/components/files/index"
import Responsible from "@/components/responsible/index"
import Tags from "@/components/tags/index"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function InputCardInfos({ className, item }) {
  const BASE_URL = "http://157.245.253.201:1337";
  
  const { data: priorityData, isLoading: loadingPriority } = useQuery({
    queryKey: ['priority'],
    queryFn: () => axios.get(`${BASE_URL}/priority`).then((response) => response.data)
  });

  const { data: complexityData, isLoading: loadingComplexity } = useQuery({
    queryKey: ['complexity'],
    queryFn: () => axios.get(`${BASE_URL}/complexity`).then((response) => response.data)
  });

  if(loadingComplexity || loadingPriority) return null

  return (
    <Card className={cn('w-[450px]', className)}>
      <CardHeader>
        <CardTitle>Ações</CardTitle>
        <CardDescription>Veja abaixo as informações complementares que lhe ajudarão a resolver este chamado.</CardDescription>
      </CardHeader>
      <div className="p-5">
        <Label htmlFor="nivel">Complexidade</Label>
        <Tabs defaultValue={item?.complexityId || 'Nível 1'}>
          <TabsList className="grid w-full grid-cols-3">
            {complexityData.map(item => (
              <TabsTrigger value={item.id} key={`complexity_item_${item.id}`}>{item.title}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tipo">Tipo</Label>
              <Select defaultValue={item?.tipo?.id}>
                <SelectTrigger id="tipo">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="n1">N1-Acessos</SelectItem>
                  <SelectItem value="ams">AMS-Não SAP</SelectItem>
                  <SelectItem value="printer">Impressora-Rede</SelectItem>
                  <SelectItem value="database">Banco de Dados-Acesso</SelectItem>
                  <SelectItem value="system">Sistema-Gestão</SelectItem>
                  <SelectItem value="backup">Serviço-Backup</SelectItem>
                  <SelectItem value="incident">Incidente</SelectItem>
                  <SelectItem value="n3">N3-Software</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="prioridade">Prioridade</Label>
              <Select defaultValue={item?.priorityId || ''}>
                <SelectTrigger id="prioridade">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {priorityData?.map(item => (
                    <SelectItem value={item.id} key={`priority_item_${item.id}`}>{item.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Files files={item?.arquivos} />

            <Tags tags={item?.tags} />

            <Responsible responsibles={item?.responsaveis} />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}