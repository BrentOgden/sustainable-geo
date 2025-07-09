import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'  
import remarkGfm from 'remark-gfm'

// glob-import your MD files as before...
const postFiles = import.meta.glob('../../posts/*.md', { as: 'raw', eager: true })
const posts = {}
for (const path in postFiles) {
  const slug = path.match(/\/([^/]+)\.md$/)[1]
  posts[slug] = postFiles[path]
}

const markdownComponents = {
  h1: ({ children, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props}>{children}</h1>,
  h2: ({ children, ...props }) => <h2 className="text-2xl py-4 text-green-300" {...props}>{children}</h2>,
  p:  ({ children, ...props }) => <p className="pb-4" {...props}>{children}</p>,
  ul: ({ children, ...props }) => <ul className="list-disc mt-4 ml-6 pb-6" {...props}>{children}</ul>,
  ol: ({ children, ...props }) => <ol className="list-decimal ml-6 pb-6" {...props}>{children}</ol>,
  li: ({ children, ...props }) => <li className="pb-2 ml-4" {...props}>{children}</li>,
  code: ({ inline, className, children, ...props }) => 
    inline
      ? <code className="bg-gray-100 px-1 rounded" {...props}>{children}</code>
      : <pre className="bg-gray-900 text-white p-2 rounded overflow-auto" {...props}>
          <code className={className}>{children}</code>
        </pre>
}

export default function BlogPostTest() {
  const { slug } = useParams()
  const raw = posts[slug]
  if (!raw) return <Navigate to="/404" replace />

  // simple front-matter strip (as before)...
  let data = {}, content = raw
  if (raw.startsWith('---')) {
    const end = raw.indexOf('---', 3)
    const fm = raw.slice(3, end).trim()
    content = raw.slice(end + 3).trim()
    fm.split('\n').forEach(line => {
      const [key, ...rest] = line.split(':')
      data[key] = rest.join(':').trim().replace(/^"(.*)"$/, '$1')
    })
  }

  const { title, description, date } = data

  return (
    <>
      <Helmet>
        <title>{title} | Sustainable Geospatial Blog</title>
        <meta name="description" content={description} />
      </Helmet>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300 mb-8">{date}</p>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]} 
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </article>
    </>
  )
}
