"use client";

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import MailingList from "@/components/MailingList";
import { blogPosts } from "@/lib/blog-data";
import { blogImages } from "@/app/images/blog";

export default function Home() {
  // Get the latest blog post
  const latestPost = blogPosts[0]; // Assuming posts are ordered by date

  return (
    <>
      <Header />
      <ScrollToTop />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-50 to-blue-100 dark:from-dark-800 dark:to-dark-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Kamran
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Software engineer and Entrepreneur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white dark:bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">About Me</h2>
            <p className="section-subtitle text-center">
              I research existing software solutions and write in blog how they
              could be improved. I listen to entrepreneurs sharing their initial
              customer acquistion painpoints and I help them find the right
              solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Latest Blog Post
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    <Link
                      href={`/blog/${latestPost.slug}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {latestPost.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {latestPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <time dateTime={latestPost.date}>
                      {new Date(latestPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{latestPost.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    Read full article
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  {latestPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-blue-200 dark:from-primary-900/30 dark:to-blue-900/30 rounded-2xl p-8">
                <div className="aspect-square bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={
                      blogImages[latestPost.imageKey as keyof typeof blogImages]
                    }
                    alt={latestPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 bg-gray-50 dark:bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Software Engineering
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building modern, responsive web applications with cutting-edge
                  technologies.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Writing & Blogging
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sharing insights, tutorials, and thoughts on AI, human
                  interaction, technology and development.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Entrepreneurship
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Helping certified welders build their portfolio, collect
                  recommendations and get paid more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <MailingList />
      </main>
    </>
  );
}
