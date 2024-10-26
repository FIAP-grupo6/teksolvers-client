import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Tags({tags = []}) {
  const [allTags, setTags] = useState(tags)
  const [currentTag, setCurrentTag] = useState("")

  const handleAddTag = () => {
    setTags(tags => [...new Set([...tags, currentTag])])
    setCurrentTag("")
  }

  const handleRemoveTag = (tag) => {
    setTags(tags => tags.filter(t => t.id !== tag.id))
  }

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="tag">Tags</Label>
      <div className="flex space-x-2">
        <Input id="tag" placeholder="Nome da Tag" value={currentTag} onChange={(e) => setCurrentTag(e.target.value)} />
        <Button onClick={handleAddTag}>Adicionar</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge key={`tag_${tag.id}`} variant="secondary" className="px-3 py-1.5 rounded-2xl">
            <p>{tag.title}</p>
            <Cross2Icon className="w-3 ml-2 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
          </Badge>
        ))}
      </div>
    </div>
  )
}