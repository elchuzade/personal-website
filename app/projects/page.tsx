import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and responsive design.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather application that provides real-time weather data and forecasts with beautiful visualizations.",
    image: "/api/placeholder/400/300",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Blog CMS",
    description:
      "A content management system for blogs with markdown support and admin dashboard.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Markdown", "Prisma", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media platforms with data visualization and reporting.",
    image: "/api/placeholder/400/300",
    tags: ["React", "D3.js", "Node.js", "Express"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-dark-800 dark:to-dark-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here's a collection of projects I've worked on, showcasing my
              skills in web development, design, and problem-solving.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white dark:bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card group hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-200 dark:bg-dark-700 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-dark-600 dark:to-dark-500 flex items-center justify-center">
                      <span className="text-4xl text-gray-500 dark:text-gray-400">
                        📱
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link href={project.link} className="btn-primary text-sm">
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      className="btn-secondary text-sm"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together.
            </p>
            <Link href="/contact" className="btn-primary">
              Let's Talk
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
