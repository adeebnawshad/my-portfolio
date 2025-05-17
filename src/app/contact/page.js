import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <section className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-8">
          Feel free to reach out via email or connect with me on LinkedIn and GitHub.
        </p>
        <div className="flex justify-center gap-10">
          <a href="mailto:adeebnawshad2022@gmail.com" className="hover:text-gray-300">
            <Mail size={32} />
          </a>
          <a href="https://www.linkedin.com/in/adeeb-nawshad-407681305/" target="_blank" className="hover:text-gray-300">
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/adeebnawshad" target="_blank" className="hover:text-gray-300">
            <Github size={32} />
          </a>
        </div>
      </section>
    </main>
  );
}
