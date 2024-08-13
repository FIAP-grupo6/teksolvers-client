import { Link } from "@tanstack/react-router";
import { Headset, LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="p-2 flex-col gap-2">
      <Link to="/dashboard" className="flex gap-4 items-center">
        <LayoutDashboard className="text-gray-400" strokeWidth={2} /> Dashboard
      </Link>
      <Link to="/meus-chamados" className="flex gap-4 items-center">
        <Headset className="text-gray-400" /> Meus chamados
      </Link>
    </aside>
  );
}