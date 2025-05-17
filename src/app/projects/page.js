import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "Planetze",
    image: "/planetze.jpg",
    stack: "Java, Android Studio, Firebase",
    link: "https://github.com/adeebnawshad/Planetze.git",
    description: "Android app to track carbon dioxide emissions"
  },

  {
    title: "SleepSense",
    image:"/sleepsense.png",
    stack: "Next.js, React, Supabase, TypeScript",
    link: "https://github.com/adeebnawshad/sleep-sense.git",
    description: "Full-stack app to track and analyze sleep habits"
  },

  {
    title: "Tetris",
    image: "/tetris.jpeg",
    stack: "MIPS Assembly",
    link: "https://github.com/adeebnawshad/Dr.Mario.git",
    description:"Classical tetris game"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} className="bg-gray-800 border border-gray-700">
            <CardContent className="p-4">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="rounded mb-4 object-cover h-48 w-full"
              />
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.stack}</p>
              <p className="text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 text-sm hover:underline"
                >
                  View Project
                </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}