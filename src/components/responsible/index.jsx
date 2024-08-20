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


const statuses = [
  {
    value: "junior",
    label: "Consultor júnior",
  },
  {
    value: "pleno",
    label: "Consultor pleno",
  },
  {
    value: "senior",
    label: "Consultor sênior",
  },
  {
    value: "specialist",
    label: "Consultor especialista",
  }
]

export default function Responsible() {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="responsavel">Responsáveis</Label>
      <div className="flex space-x-2">
        <ComboboxPopover />
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
  )
}



export function ComboboxPopover() {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState(
    null
  )

  return (
    <div className="w-full flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-full h-9 justify-start"
          >
            Adicionar responável
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Buscar responsável" />
            <CommandList>
              <CommandEmpty>Resposável não encontrado.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    className="flex gap-2"
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                        null
                      )
                      setOpen(false)
                    }}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{status.label}</span>
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