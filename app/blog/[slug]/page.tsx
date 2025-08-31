import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { blogImages } from "@/app/images/blog";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <ScrollToTop />

      <main className="pt-16">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-dark-800 dark:to-dark-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>

              <h1 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Post Image */}
        <section className="py-12 bg-white dark:bg-dark-900">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={blogImages[post.imageKey as keyof typeof blogImages]}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white dark:bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div
                className="text-gray-700 dark:text-gray-300 leading-relaxed [&>p]:pl-8 [&>p]:indent-8"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />
            </article>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-20 bg-gray-50 dark:bg-dark-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-primary-600 dark:text-primary-400">
                    👨‍💻
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    About {post.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A passionate developer who loves sharing knowledge and
                    building amazing web experiences.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                  >
                    Get in touch →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-white dark:bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="card hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
