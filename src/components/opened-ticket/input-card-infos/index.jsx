import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cross2Icon } from "@radix-ui/react-icons"

export default function InputCardInfos() {
  return (
    <Card className="w-[450px]">
      <div className="p-5">
        <Label htmlFor="nivel">Complexidade</Label>
        <Tabs defaultValue="nivel">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="n1">Nível 1</TabsTrigger>
            <TabsTrigger value="n2">Nível 2</TabsTrigger>
            <TabsTrigger value="n3">Nível 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tipo">Tipo</Label>
              <Select>
                <SelectTrigger id="tipo">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="incidente">Incidente</SelectItem>
                  <SelectItem value="suporte">Suporte</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="prioridade">Prioridade</Label>
              <Select>
                <SelectTrigger id="prioridade">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="baixa">Baixa</SelectItem>
                  <SelectItem value="media">Média</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Arquivos</Label>
              <div className="flex space-x-2">
                <Input id="name" type="file" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tag">Tags</Label>
              <div className="flex space-x-2">
                <Input id="tag" placeholder="Nome da Tag" />
                <Button>Adicionar</Button>
              </div>
              <div className="space-x-2">
                <Badge variant="secondary" className="px-3 py-1.5 rounded-2xl">
                  <p>UX/UI</p>
                  <Cross2Icon className="w-3 ml-2" />
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 rounded-2xl">
                  <p>Incidente</p>
                  <Cross2Icon className="w-3 ml-2" />
                </Badge>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="responsavel">Responsáveis</Label>
              <div className="flex space-x-2">
                <Input id="responsavel" placeholder="Selecionar um responsável" />
                <Button>Adicionar</Button>
              </div>
              <div className="space-x-2">
                <Badge variant="secondary" className="rounded-2xl p-0.5">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="pl-2">Consultor Júnior</p>
                  <Cross2Icon className="w-3 mx-2" />
                </Badge>
                <Badge variant="secondary" className="rounded-2xl p-0.5">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="pl-2">Consultor Sênior</p>
                  <Cross2Icon className="w-3 mx-2" />
                </Badge>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
      </CardFooter> */}
    </Card>
  )
}