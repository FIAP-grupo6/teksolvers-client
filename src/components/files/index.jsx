import { FileIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Files({ files = [], label = "Arquivos" }) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">{label}</Label>
      <div className="flex space-x-2">
        <Input id="name" type="file" />
      </div>
      <div className="flex flex-wrap gap-2">
        {files?.map((tag, index) => (
          <Tooltip key={`tag_${index}_tooltip`}>
            <TooltipTrigger>
              <Badge key={`tag_${index}`} variant="secondary" className="px-3 py-1.5 rounded-2xl">
                <FileIcon className="w-4 mr-2" />
                <p>{tag.titulo}</p>
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              Baixar arquivo
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}