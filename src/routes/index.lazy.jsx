import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

export const Route = createLazyFileRoute("/")({
  component: Dashboard,
});


function Dashboard() {
  return (
    <>
      <Helmet>
        <title>DeskBots - Sobre o projeto</title>
      </Helmet>

      <main className="grid flex-1 max-w-8xl m-0 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <h1 className="text-3xl font-bold">Sobre o projeto</h1>
      </main>
    </>
  );
}
