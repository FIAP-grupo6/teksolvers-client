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
            Overview
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Architecture
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Team
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Videos
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Technologies
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Project Overview</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolutionizing the Way We Work</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our project aims to transform the way teams collaborate and innovate. With a focus on seamless
                  integration, automation, and scalability, we're building the ultimate platform for modern web
                  development.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project Overview"
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
                alt="Architecture"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Technical Architecture</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Scalable and Secure by Design</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our project's architecture is built on a robust and scalable foundation, leveraging the latest
                  technologies and best practices. From the frontend to the backend, every component is designed to work
                  seamlessly together, ensuring high performance, reliability, and security.
                </p>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Microservices</h3>
                    <p className="text-muted-foreground">
                      Our modular microservices architecture allows for independent scaling and deployment of individual
                      components, ensuring maximum flexibility and resilience.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Serverless Computing</h3>
                    <p className="text-muted-foreground">
                      By embracing serverless technologies, we can automatically scale our infrastructure to meet
                      fluctuating demands, reducing operational overhead and improving cost-efficiency.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Containerization</h3>
                    <p className="text-muted-foreground">
                      Our use of containerization and orchestration tools ensures consistent, reliable, and secure
                      deployments across different environments.
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
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Meet the Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                The Brilliant Minds Behind the Project
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Our team is composed of experienced professionals who are passionate about pushing the boundaries of
                what's possible in web development.
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
                  <p className="text-muted-foreground text-sm">Project Manager</p>
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
                  <p className="text-muted-foreground text-sm">Lead Developer</p>
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
                  <p className="text-muted-foreground text-sm">UI/UX Designer</p>
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
                  <p className="text-muted-foreground text-sm">QA Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="videos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Video Pitches</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear from Our Team</h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Check out our video pitches to learn more about our project and the problem we're solving.
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
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Technologies</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powering Our Project</h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                We're leveraging the latest and greatest technologies to build our project.
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
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
      </main>
    </>
  );
}
