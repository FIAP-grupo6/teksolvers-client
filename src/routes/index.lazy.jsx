import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet";
import robot1 from '../assets/robot1.jpeg';
import robot2 from '../assets/robot2.jpeg';
import leonardo from '../assets/leonardo.jpeg';
import matheus from '../assets/matheus.jpg';
import anderson from '../assets/anderson.jpeg';
import fernando from '../assets/fernando.jpeg';
import reactimg from '../assets/react.svg';
import tailwindimg from '../assets/tailwind.svg';
import shadcnimg from '../assets/shadcn.svg';
import { Ticket } from "lucide-react";

import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>DeskBots - Sobre o projeto</title>
      </Helmet>

    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" >
          <Ticket className="w-6 h-6 mr-2" />
          <h1 className="font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 translate-x-0 opacity-100">Desk Bots</h1>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Visão geral
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Arquitetura
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Time
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Vídeo Pitch
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Tecnologias
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Visão geral do projeto</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolucionando a maneira de gerenciar Tickets</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nosso projeto visa transformar a forma como equipes interagem. Com foco na integração, 
                  automação e escalabilidade, construímos a plataforma definitiva para o 
                  gerenciamento de tickets.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    to="/chamados"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Conheça a Solução
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
              <img
                src={robot1}
                alt="Project Overview"
                className="mx-auto w-full h-auto max-w-[530px] rounded-xl object-contain sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="architecture" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <img
                src={robot2}
                width="550"
                height="310"
                alt="Architecture"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first mix-blend-multiply contrast-100"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Arquitetura Técnica</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A arquitetura do nosso projeto é focalizada na escalabilidade e assertividade, aproveitando as melhores
                  tecnologias e práticas do mercado.
                </p>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Escalabilidade</h3>
                    <p className="text-muted-foreground">
                      Nosso projeto conta com múltiplos Robôs Inteligentes nomeados de Agentes, cada Agente é responsável
                      por uma funcionalidade do sistema, a possibilidade de criação de agentes é infinita, assim suprindo
                      todas possíveis necessidades da plataforma
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Automação</h3>
                    <p className="text-muted-foreground">
                    Os agentes automatizam diversas tarefas manuais, como a sugestão de soluções, abertura inteligente 
                    de chamados e outras ações. Cada agente é equipado com uma base de dados e um treinamento de IA 
                    especializado para o escopo específico a que foi designado, garantindo assim maior assertividade e 
                    otimização de tempo.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Integração e análise</h3>
                    <p className="text-muted-foreground">
                      A plataforma possuí integração com todos sistemas de abertura de chamados. 
                      Além de um Dashboard inteligente para gestão e análise de chamados utilizando métricas de SLA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Conheça o time</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                As mentes brilhantes por trás do projeto
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Nossa equipe é composta por profissionais experientes e apaixonados por desafios de desenvolvimento
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={leonardo}
                  width="120"
                  height="120"
                  alt="John Doe"
                  className="rounded-full"
                  style={{ aspectRatio: "120/120", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h3 className="font-bold hover:underline underline-offset-4">
                    <a href="https://www.linkedin.com/in/lsgoulart/" target="_blank">
                      Leonardo Goulart
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm">Full-stack Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={matheus}
                  width="120"
                  height="120"
                  alt="Jane Smith"
                  className="rounded-full"
                  style={{ aspectRatio: "120/120", objectFit: "cover" }}
                />
                <div className="text-center">
                    <h3 className="font-bold hover:underline underline-offset-4">
                      <a href="https://www.linkedin.com/in/matheus-de-nigris-a89618269/" target="_blank">
                        Matheus De Nigris
                      </a>
                  </h3>
                  <p className="text-muted-foreground text-sm">Full-stack Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={anderson}
                  width="120"
                  height="120"
                  alt="Michael Johnson"
                  className="rounded-full"
                  style={{ aspectRatio: "120/120", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h3 className="font-bold hover:underline underline-offset-4">
                    <a href="https://www.linkedin.com/in/andersonbrandao/" target="_blank">
                      Anderson Brandão
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm">Back-end Developer | UX Writer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={fernando}
                  width="120"
                  height="120"
                  alt="Sarah Lee"
                  className="rounded-full"
                  style={{ aspectRatio: "120/120", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h3 className="font-bold hover:underline underline-offset-4">
                      <a href="https://www.linkedin.com/in/fernando-sakahida-2a19052b6/" target="_blank">
                      Fernando Sakahida
                      </a>
                  </h3>
                  <p className="text-muted-foreground text-sm">Videomaker | Product Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="videos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vídeo Pitch</h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Confira nosso vídeo para saber mais sobre nosso projeto
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="technologies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tecnologias</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Impulsionando Nosso Projeto</h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Estamos aproveitando as melhores e mais recentes tecnologias para construir nosso projeto.
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={reactimg}
                  width="65"
                  height="65"
                  alt="React"
                  className="aspect-square object-contain"
                />
                <div className="text-center text-sm font-medium hover:underline underline-offset-4">
                  <a href="https://react.dev" target="_blank">
                    React
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={tailwindimg}
                  width="65"
                  height="65"
                  alt="React"
                  className="aspect-square object-contain"
                />
                <div className="text-center text-sm font-medium hover:underline underline-offset-4">
                  <a href="https://tailwindcss.com" target="_blank">
                    Tailwind CSS
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={shadcnimg}
                  width="65"
                  height="65"
                  alt="React"
                  className="aspect-square object-contain"
                />
                <div className="text-center text-sm font-medium hover:underline underline-offset-4">
                  <a href="https://ui.shadcn.com" target="_blank">
                    Shadcn/UI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024. Todos direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" >
            Termos de serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" >
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  </>
  )
}
