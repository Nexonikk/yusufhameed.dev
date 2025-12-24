import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="flex-1 space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-2xl font-bold"
              text={DATA.name}
            />
          </div>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a software engineer with 1 year of experience working
              across full-stack and backend systems, with hands-on experience
              building scalable web applications, backend APIs using
              JavaScript/TypeScript, Next.js, and Node.js. I also have
              experience designing, scaling, and optimizing distributed systems
              using Kafka, RabbitMQ, and Redis, and deploying production
              workloads on AWS (EC2, S3) with Dockerized environments and CI/CD
              pipelines.
            </p>
            <p>
              Currently, I contribute to AI evaluation and benchmarking systems
              at Xelron (Snorkel AI ecosystem), designing terminal-based backend
              tasks, Dockerized environments, and deterministic validation
              pipelines for training and evaluating large language models.
              Previously, I worked as a Backend Developer at Talecto, building
              RESTful APIs with Node.js and Express.js, integrating AWS S3, and
              following clean, scalable backend practices.
            </p>
            <p>
              If you have an exciting project or role that aligns with my
              expertise, please reach out at{" "}
              <a
                href="mailto:yusufhameed911@gmail.com"
                className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              >
                yusufhameed911@gmail.com
              </a>{" "}
              or through any of my social channels.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <a
                href="https://drive.google.com/file/d/14S0bDQBV87ctuIRUy82EC4Gw_BF_WUUk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </section>

      {/* ------------------------------------------------------- */}

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.slice(0, 4).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href="https://wa.me/+917007409200"
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on Whatsapp
                </Link>{" "}
                and I&apos;ll respond fast. I will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
