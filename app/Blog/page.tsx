import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const blogs = [
    {
      title: "Developer-Friendly Authentication in Next.js: A Comprehensive Guide",
      description: "Building a Developer-Friendly Authentication System in Next.js with NextAuth.js. This guide will walk you through creating a developer-friendly authentication system in Next.js using NextAuth.js.",
      url: "https://wasi.hashnode.dev/developer-friendly-authentication-in-nextjs-a-comprehensive-guide",
      date: "Jul 18, 2024",
      readTime: "3 min read",
      imageUrl: "/nextauthblog.png" // Updated image URL
    },
    {
      title: "How Next.js Simplifies Development: Insights from a Second-Year Computer Science Undergrad",
      description: "As a second-year computer science undergrad, I've explored various frameworks, but Next.js truly stands out. Its simplicity and power have significantly streamlined my development process.",
      url: "https://wasi.hashnode.dev/how-nextjs-simplifies-development-insights-from-a-second-year-computer-science-undergrad",
      date: "Jul 16, 2024",
      readTime: "1 min read",
      imageUrl: "/nextjssimplfies.png" // Updated image URL
    }
  ];

  return (
    <section className="py-10 lg:py-16 px-3 bg-gray-800">
      <div className="mt-10 lg:mt-20 bg-gray-700 p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          <span className="text-[#f72b1c]">My</span>Blogs
        </h1>
        <p className="text-xs lg:text-sm text-gray-400 max-w-3xl mx-auto mt-3 lg:mt-5">
          Explore my latest articles and insights on various topics in web development. Each post offers valuable information and guidance to help you navigate the ever-evolving world of technology.
        </p>
      </div>
      <div className="py-10 lg:py-16 px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#181818] border border-gray-800 rounded-lg overflow-hidden transition duration-300 hover:bg-gray-800 hover:shadow-lg p-4"
            >
              <Link href={blog.url} target="_blank">
                <div className="relative">
                  <Image
                    alt={blog.title}
                    src={blog.imageUrl}
                    className="w-full h-48 object-cover"
                    width={500}
                    height={250}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{blog.date} · {blog.readTime}</p>
                  <p className="text-gray-300 text-base mb-4">{blog.description}</p>
                  <span className="text-[#f72b1c] font-medium">Read More</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
