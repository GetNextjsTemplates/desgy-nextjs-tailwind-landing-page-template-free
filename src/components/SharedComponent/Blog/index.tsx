import React from 'react';
import Link from 'next/link';
import { Icon } from "@iconify/react"
import BlogCard from './blogCard';
import { getAllPosts } from "@/utils/markdown";

const Blog: React.FC = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]).slice(0, 3);

    return (
        <section className="flex flex-wrap justify-center py-24 " id="blog">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="flex items-baseline justify-between flex-wrap">
                    <h2 className="sm:mb-11 mb-3 text-36 font-bold text-midnight_text dark:text-white" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Latest blog & news</h2>
                    <Link href="#" className="flex items-center gap-3 text-17 text-midnight_text dark:text-white hover:dark:text-primary font-medium hover:text-primary sm:pb-0 pb-3" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        View More
                        <span>
                            <Icon
                                icon="solar:arrow-right-outline"
                                width="30"
                                height="30"
                            />
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-12 gap-7">
                    {posts.map((blog, i) => (
                        <div key={i} className="w-full md:col-span-4 col-span-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
