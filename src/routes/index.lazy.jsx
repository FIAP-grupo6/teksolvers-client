import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

export const Route = createLazyFileRoute("/")({
  component: Dashboard,
});


function Dashboard() {
  return (
    <>
      <Helmet>
        <title>TekSolvers - Sobre o projeto</title>
      </Helmet>

      <main className="grid flex-1 max-w-8xl m-0 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Visão Geral
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Arquitetura
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Equipe
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Vídeos
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Tecnologias
              </Link>
            </nav>
          </header>
          <main className="flex-1">
            <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Visão Geral do Projeto</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolutionizando a Forma como Trabalhamos</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Nosso projeto tem como objetivo transformar a forma como as equipes colaboram e inovam. Com foco na integração
                      perfeita, automação e escalabilidade, estamos construindo a plataforma definitiva para o desenvolvimento web moderno.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Começar
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Saiba Mais
                      </Link>
                    </div>
                  </div>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Visão Geral do Projeto"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  />
                </div>
              </div>
            </section>
            <section id="architecture" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Arquitetura"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
                  />
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Arquitetura Técnica</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Escalável e Seguro por Design</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      A arquitetura do nosso projeto é construída sobre uma base robusta e escalável, aproveitando as mais recentes
                      tecnologias e melhores práticas. Do frontend ao backend, cada componente é projetado para funcionar
                      perfeitamente em conjunto, garantindo alto desempenho, confiabilidade e segurança.
                    </p>
                    <div className="grid gap-4">
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Microsserviços</h3>
                        <p className="text-muted-foreground">
                          Nossa arquitetura modular de microsserviços permite a escalabilidade e implantação independentes de componentes
                          individuais, garantindo flexibilidade e resiliência máximas.
                        </p>
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Computação sem Servidor</h3>
                        <p className="text-muted-foreground">
                          Ao adotar tecnologias sem servidor, podemos dimensionar automaticamente nossa infraestrutura para atender às
                          demandas flutuantes, reduzindo a sobrecarga operacional e melhorando a eficiência de custos.
                        </p>
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Containerização</h3>
                        <p className="text-muted-foreground">
                          Nosso uso de ferramentas de containerização e orquestração garante implantações consistentes, confiáveis e
                          seguras em diferentes ambientes.
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
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Conheça nossa equipe</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    As Mentes Brilhantes por Trás do Projeto
                  </h2>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    Nossa equipe é composta por profissionais experientes que são apaixonados por empurrar os limites do que é possível no desenvolvimento web.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="120"
                      height="120"
                      alt="John Doe"
                      className="rounded-full"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="text-center">
                      <h3 className="font-bold">John Doe</h3>
                      <p className="text-muted-foreground text-sm">Gerente de Projeto</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="120"
                      height="120"
                      alt="Jane Smith"
                      className="rounded-full"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="text-center">
                      <h3 className="font-bold">Jane Smith</h3>
                      <p className="text-muted-foreground text-sm">Desenvolvedor Líder</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="120"
                      height="120"
                      alt="Michael Johnson"
                      className="rounded-full"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="text-center">
                      <h3 className="font-bold">Michael Johnson</h3>
                      <p className="text-muted-foreground text-sm">Designer UI/UX</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="120"
                      height="120"
                      alt="Sarah Lee"
                      className="rounded-full"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="text-center">
                      <h3 className="font-bold">Sarah Lee</h3>
                      <p className="text-muted-foreground text-sm">Engenheira de QA</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="videos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Vídeos de Apresentação</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Saiba mais sobre o nosso projeto</h2>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    Confira nossos vídeos de apresentação para saber mais sobre nosso projeto e o problema que estamos resolvendo.
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Alimentando Nosso Projeto</h2>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    Estamos aproveitando as mais recentes e melhores tecnologias para construir nosso projeto.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="React"
                      className="aspect-square object-contain"
                    />
                    <div className="text-center text-sm font-medium">React</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Node.js"
                      className="aspect-square object-contain"
                    />
                    <div className="text-center text-sm font-medium">Node.js</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="MongoDB"
                      className="aspect-square object-contain"
                    />
                    <div className="text-center text-sm font-medium">MongoDB</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img src="/placeholder.svg" width="80" height="80" alt="AWS" className="aspect-square object-contain" />
                    <div className="text-center text-sm font-medium">AWS</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Docker"
                      className="aspect-square object-contain"
                    />
                    <div className="text-center text-sm font-medium">Docker</div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. Todos os direitos reservados.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Termos de Serviço
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Privacidade
              </Link>
            </nav>
          </footer>
        </div>
      </main>
    </>
  );
}
