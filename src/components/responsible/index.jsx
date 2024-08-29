import * as React from "react";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const list = [
  {
    "id": 1,
    "nome": "Analista Acesso",
    "imagem": "https://api.dicebear.com/9.x/avataaars/svg?seed=Buster&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile"
  },

  {
    "id": 2,
    "nome": "Analista AMS",
    "imagem": "https://api.dicebear.com/9.x/avataaars/svg?seed=Buster&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile"
  },

  {
    "id": 3,
    "nome": "Analista Aplicativo",
    "imagem": "https://api.dicebear.com/9.x/avataaars/svg?seed=Buster&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile"
  },

  {
    "id": 4,
    "nome": "Analista de Impressoras",
    "imagem": "https://api.dicebear.com/9.x/avataaars/svg?seed=Analyst&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile"
  },

  {
    "id": 5,
    "nome": "Analista de Banco de Dados",
    "imagem": "https://api.dicebear.com/9.x/avataaars/svg?seed=Analyst&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile"
  },

  {
    "id": 6,
    "nome": "Analista de Sistemas",
    "imagem": "https://api.dicebear.com/9.x/avataaars/svg?seed=Analyst&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile"
  },

  {
    "id": 7,
    "nome": "Analista de Backup",
    "imagem": "https://api.dicebear.com/9.x/avataaars/svg?seed=Backup&randomizeIds=true&accessories=prescription01&clothingGraphic=bear&eyes=default&mouth=smile"
  },
]








export default function Responsible({ responsibles = [] }) {
  const [selected, setSelected] = React.useState([...responsibles])

  const handleRemove = (responsible) => {
    setSelected(s => s.filter(t => t !== responsible))
  }

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="responsavel">Responsáveis</Label>
      <div className="flex space-x-2">
        <ComboboxPopover selected={selected} onSelectResponsible={(responsible) => { console.log('res', responsible); setSelected(state => [...state, responsible])}} />
      </div>

      <div className="flex gap-2 flex-wrap">
        {selected.map((responsible) => (
          <Badge key={responsible.value} variant="secondary" className="rounded-full p-0.5">
            <Avatar className="w-8 h-8">
              <AvatarImage src={responsible?.imagem} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="pl-2">{responsible.nome}</p>
            <Cross2Icon className="w-3 mx-2 cursor-pointer" onClick={() => handleRemove(responsible)} />
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function ComboboxPopover({ selected, onSelectResponsible }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="w-full flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="md"
            className="w-full h-9 justify-start px-4"
          >
            Adicionar responsável
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Buscar responsável" />
            <CommandList>
              <CommandEmpty>Resposável não encontrado.</CommandEmpty>
              <CommandGroup>
                {list.filter((responsible) => !selected?.includes(responsible)).map((responsible) => (
                  <CommandItem
                    key={`command_${responsible.id}`}
                    value={responsible.id}
                    className="flex gap-2"
                    onSelect={(value) => {
                      onSelectResponsible(
                        list.find((responsible) => responsible.nome === value) ||
                        null
                      )
                      setOpen(false)
                    }}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={responsible.imagem} alt="@shadcn" />
                    </Avatar>
                    <span>{responsible.nome}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}