import React from 'react'
import { Link } from 'react-router-dom'
import BlogPost from '../pages/Blogs/BlogPostTest'

export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200">
      {post.image && (
        <Link to={`/blog/${post.slug}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-4">
        <time className="text-xs text-gray-500">{post.date}</time>
        <h3 className="mt-1 text-lg font-semibold text-[#031A13]">
          <Link to={`/blog/${post.slug}`} className="hover:text-[rgb(78,181,150)]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-gray-700 text-sm">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-4 inline-block text-[rgb(78,181,150)] hover:underline text-sm font-medium"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
