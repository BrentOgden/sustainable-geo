// src/components/TextOnlyLayout.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'

export function TextOnlyLayout({ title, description, date, children }) {
  return (
    <>
      <Helmet>
        <title>{title} | Sustainable Geospatial Blog (Text Only)</title>
        <meta name="description" content={description} />
      </Helmet>
      <article className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">{date}</p>
        <div className="space-y-4 text-base leading-relaxed">{children}</div>
      </article>
    </>
  )
}
